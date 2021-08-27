import { firebaseConf } from "./../firebase/config";
import { bucketUpload } from "./../config/axios.config";

// const [imgValue, setImgValue] = React.useState<any>("");
// setImgValue(e.currentTarget.files[0]);

//StorageUpload(result.data.docRef, imgValue)

export const StorageUpload = async (
  docRef: string,
  imgValue: File,
  mode: string
) => {
  const newMetadata = {
    contentType: imgValue.type,
    customMetadata: {
      docRef: `${docRef}`,
      mode: mode,
    },
  };

  if (imgValue) {
    const refUpload = firebaseConf
      .storage(bucketUpload)
      .ref(docRef + "/" + imgValue.name);

    const result = await refUpload.put(imgValue, newMetadata);

    return result;
  }
  {
    return "berhasil";
  }
};

export const StorageUploadArray = async (docRef: string, imgValue: any) => {
  const newMetadata = {
    contentType: imgValue.type,
    customMetadata: {
      docRef: `${docRef}`,
      mode: "ARRAY",
    },
  };

  const refUpload = firebaseConf
    .storage(bucketUpload)
    .ref(docRef + "/" + imgValue.name);

  const result = await refUpload.put(imgValue, newMetadata);

  return result;
};
