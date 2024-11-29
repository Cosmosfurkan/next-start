"use client";

import { useState } from "react";

import { Button } from "@nextui-org/react";
import { loadStripe } from "@stripe/stripe-js";

import { env } from "@/env/client";

const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PaymentForm({ userEmail }: { userEmail: string }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="primary"
      onClick={handlePayment}
      isLoading={loading}
      className="w-full"
    >
      Proceed to Payment
    </Button>
  );
}
