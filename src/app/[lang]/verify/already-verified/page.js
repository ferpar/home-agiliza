import { getDictionary } from "../../dictionaries";

export default async function AlreadyVerified({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <h1>{dict["VERIFICATION_ALREADY_VERIFIED"]}</h1>
      <p>{dict["VERIFICACION_ALREADY_VERIFIED_DESCR"]}</p>
    </>
  );
}
