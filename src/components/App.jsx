import payments from "../payment.json";

import { PaymentList } from "./PaymentList";
import payments1 from "../payment_1.json";
import payments2 from "../payment_2.json";

export default function App() {
  return (
    <>
      <h2>Payments 1</h2>
      <PaymentList payments={payments1} />

      <h2>Payments 2</h2>
      <PaymentList payments={payments2} />

      <h2>All Payments</h2>
      <PaymentList payments={payments} />
    </>
  );
}
