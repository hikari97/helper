import React from "react";
import { Axios } from "config/axios.config";
import { firebaseConf } from "firebase/config";
import firebase from "firebase";
import { BukuDoaServiceType } from "pages/api/service";

interface IContext {
  token: string;
  user: firebase.User | null | undefined;
}

const IContextDefaultValues: IContext = {
  token: "",
  user: null,
};

const DefinContext = React.createContext<IContext>(IContextDefaultValues);

interface IAlertBg {
  text: string | undefined;
  display: boolean | false;
}

export function AlertBg({ text, display }: IAlertBg) {
  return (
    <div className={display ? "bg-alert" : "bg-alert-none"}>
      <div className="content-alert">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export const JenisRenungan = ["Renungan Harian", "Renungan Mingguan"];

export const userPhoto =
  "https://firebasestorage.googleapis.com/v0/b/jalan-hidup-temporary/o/logo%2Flogo%20JHK1%20Round.png?alt=media&token=6083656f-9969-42e8-b567-96334d3ae14f";

export function ctxProvider() {
  return React.useContext(DefinContext);
}

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  const [user, setUser] = React.useState<firebase.User | null>();
  const [token, setToken] = React.useState<string>("");
  const [time, setTime] = React.useState<number>();

  // handle token changed
  React.useEffect(() => {
    return firebaseConf.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      const Itoken = await user.getIdToken();
      setToken(Itoken);
      setUser(user);
      if (!token) {
        RequestToken(Itoken);
      }
    });
  }, [time]);

  // force token every 2 minute
  React.useEffect(() => {
    const handle = setInterval(async () => {
      setTime(Date.now());
      const user = firebaseConf.auth().currentUser;
      if (user) await user.getIdToken(true);
      // if (token) {
      //   RequestToken(token);
      // }
    }, 120000);

    return () => clearInterval(handle);
  }, []);

  const RequestToken = async (t: string) => {
    try {
      await Axios.post<{ token: string }>("/auth/token", { token: t });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const value = {
    token,
    user,
  };
  return (
    <DefinContext.Provider value={value}>{children}</DefinContext.Provider>
  );
}

export default Provider;

export { DateValueForm, DateConvert, DateValueForm2 } from "./dateConvert";
export { StorageUpload, StorageUploadArray } from "./firestorageUpload";
export { RpFormat } from "./RpFormat";
