import { Card, CardBody } from "@nextui-org/react";
import { getServerSession } from "next-auth";

import options from "@/config/auth";
import requireAuth from "@/utils/require-auth";

import PaymentForm from "./payment-form";

export default async function PaymentPage() {
  await requireAuth();
  const session = await getServerSession(options);

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <h1 className="mb-4 text-center text-2xl">
          Complete Your Registration
        </h1>
        <PaymentForm userEmail={session?.user?.email || ""} />
      </CardBody>
    </Card>
  );
}
