const foo = (a) => a + 5;

const data = {
  id: "1",
  cardNumber: "1234 5678 9012 3456",
  cardType: "Visa",
  cardOwner: "John Doe",
  date: "2024-01-01",
  amount: 100,
  description: "Payment for groceries",
};

const Payment = (props) => {
  console.log(props);
  return (
    <div>
      <p>Amount: {props.amount} </p>
      <p>Status: Paid or Pending</p>
      <p>Description: </p>
      <p>Card Number: </p>
      <p>Card Type: </p>
      <p>Card Holder Name: </p>
      <p>Payment Date: </p>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Payment amount="50" a="5" />
      <hr />
      <Payment amount="80" a="10" />
      <hr />
      <Payment amount="100" a="15" />
    </>
  );
}
