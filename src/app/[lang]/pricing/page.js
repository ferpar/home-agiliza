import { getDictionary } from '../dictionaries';
import Pricing from './PricingMain'

export default async function PricingPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Pricing dict={dict} />
    </>
  );
}