import { Card, CardBody } from "@nextui-org/react";
import { IconCircleCheck } from "@tabler/icons-react";

export default function PaymentSuccess() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <IconCircleCheck className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-2xl">Payment Successful!</h1>
        <p className="mt-2">Thank you for your subscription.</p>
      </CardBody>
    </Card>
  );
}
