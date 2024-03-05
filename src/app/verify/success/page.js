import { getString } from "@/helpers/i18n";

export default function VerifySuccess() {
  return (
    <>
      <h1>{getString("VERIFICATION_SUCCESS")}</h1>
      <p>{getString("VERIFICACION_SUCCESS_DESCR")}</p>
    </>
  );
}
