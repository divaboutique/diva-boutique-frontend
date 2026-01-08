import { useState } from "react";
import LanguageToggle from "../components/LanguageToggle";

export default function Checkout() {
  const [payment, setPayment] = useState("cod");

  async function placeOrder() {
    alert(`Order placed with payment method: ${payment.toUpperCase()}`);
    // Later: connect to backend for real orders
  }

  return (
    <main style={{ background: "#f6f3ef", minHeight: "100vh", padding: "100px" }}>
      <LanguageToggle />

      <h1 style={{ fontFamily: "serif", fontSize: "48px", marginBottom: "40px" }}>
        Checkout
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={payment === "cod"}
            onChange={() => setPayment("cod")}
          />
          {" "}Cash on Delivery
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={payment === "card"}
            onChange={() => setPayment("card")}
          />
          {" "}Credit / Debit Card
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={payment === "paypal"}
            onChange={() => setPayment("paypal")}
          />
          {" "}PayPal
        </label>
      </div>

      <button
        onClick={placeOrder}
        style={{
          padding: "16px 40px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Place Order
      </button>
    </main>
  );
}
