import { getDictionary } from "../../dictionaries";

export default async function VerifySuccess({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <h1>{dict["VERIFICATION_SUCCESS"]}</h1>
      <p>{dict["VERIFICACION_SUCCESS_DESCR"]}</p>
    </>
  );
}
