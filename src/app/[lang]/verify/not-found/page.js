import { getString } from "@/helpers/i18n";

export default function VerifyNotFound() {
  return (
    <>
      <h1>{getString("VERIFICATION_NOT_FOUND")}</h1>
      <p>{getString("VERIFICACION_NOT_FOUND_DESCR")}</p>
    </>
  );
}
