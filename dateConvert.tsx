import moment from "moment";

//TGL : dd/mm/yyy
export const DateConvert = (data: string) => {
  const date = new Date(Number(data));
  // const timestamp = date..toLocaleDateString("id");

  // const localDate = moment(Number(data)).format("LL");
  // const day = date.getDay();
  // const month = date.getUTCMonth();
  // const year = date.getFullYear();
  // const currentTimeStamp = `${day}-${month}-${year}`;

  return Intl.DateTimeFormat("ID", { dateStyle: "long" }).format(date);
};

//TGL : yyyy/mm/dd
export const DateValueForm2 = (data: string) => {
  const localDate = moment(Number(data)).format("yyyy-MM-DD");
  const date = new Date(Number(data) * 100);

  // const test = Intl.DateTimeFormat().format(date);
  // console.log(test);
  return localDate;
};

//TGL : yyyy/mm/dd
export const dateNow = moment().format("yyyy-MM-DD");
// export const dateNow = new Date().toISOString().split("T")[0];

//TGL : yyyy/mm/dd
export const DateValueForm = (data: string) => {
  const date = new Date(data);
  const timestamp = date.toLocaleDateString("fr-CA");

  return timestamp;
};
