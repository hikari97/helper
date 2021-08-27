export const RpFormat = (angka: string) => {
  const prefix = "Rp .";
  let number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
};
// const [rp, SetRp] = React.useState<string>();

// const onChangeHarga = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const value = e.currentTarget.value;
//   if (value.length >= 1) {
//     const ress = `${RpFormat(e.currentTarget.value)}`;
//     // console.log(`${e.currentTarget.value} : ${rp}`);

//     SetRp(ress);
//   } else {
//     SetRp("");
//   }
// };
