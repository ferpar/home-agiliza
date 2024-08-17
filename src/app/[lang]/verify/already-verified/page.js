import { getString } from "@/helpers/i18n";

export default function AlreadyVerified() {
  return (
    <>
      <h1>{getString("VERIFICATION_ALREADY_VERIFIED")}</h1>
      <p>{getString("VERIFICACION_ALREADY_VERIFIED_DESCR")}</p>
    </>
  );
}
