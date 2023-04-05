import React from "react";
import ReactDOM from "react-dom";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ order }) => {
  const [load, setLoad] = useState(false);
  const { title, productImg, price, name, email, category, _id } = order;
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [transactionId, settransactionId] = useState("");
  const [success, setsuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch(`https://homeify-server-orpin.vercel.app/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => console.log(error.message));
  }, [price]);

  const handlePayment = async (event) => {
    setLoad(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    settransactionId("");
    setsuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
            name: name,
          },
        },
      });

    if (confirmError) {
      setLoad(false);
      setCardError(confirmError.message);
      return;
    }

    const payment = {
      title,
      price,
      email,
      category,
      transactionId: paymentIntent.id,
      productImg,
    };
    if (paymentIntent.status === "succeeded") {
      fetch(`https://homeify-server-orpin.vercel.app/payments`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setLoad(false);
            toast.success("payment successfull", { duration: 1200 });
            settransactionId(paymentIntent.id);
            setsuccess("Congratulation your payment completed");
          }
        })
        .catch((error) => {
          console.error(error.message);
          setLoad(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handlePayment}>
        <div className="py-4 border rounded-xl px-4 mt-10 text-[#252424] border-[#25242462] w-full">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="py-2 font-semibold mt-3 text-white hover:bg-orange-600 rounded-lg bg-primary px-8"
        >
          {load ? (
            <p className="border-2 border-dashed border-white animate-spin w-5 h-5 rounded-full"></p>
          ) : (
            "Pay"
          )}
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 font-semibold font-jost">{cardError}</p>
      )}
      <div className="text-[16px] mt-4 font-jost">
        {success && (
          <div>
            <p className="text-green-600">{success}</p>
            <p className="font-semibold">TransactionId : {transactionId}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
