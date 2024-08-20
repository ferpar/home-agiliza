import { getDictionary } from "../../dictionaries";
import NewPassword from "./NewPassword";

export default async function NewPasswordPage({ params: { lang, jwt } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <NewPassword dict={dict} jwt={jwt} />
    </>
  );
}