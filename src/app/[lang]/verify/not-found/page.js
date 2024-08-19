import { getDictionary } from "../../dictionaries";

export default async function VerifyNotFound({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <h1>{dict["VERIFICATION_NOT_FOUND"]}</h1>
      <p>{dict["VERIFICACION_NOT_FOUND_DESCR"]}</p>
    </>
  );
}
