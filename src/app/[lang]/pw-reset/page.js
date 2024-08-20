import { getDictionary } from "../dictionaries";
import ResetPassword from "./ResetPassword";

export default async function ResetPasswordPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <ResetPassword dict={dict} />
    </>
  );
}