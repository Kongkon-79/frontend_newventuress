import OrderConfirmed from "@/components/orderConfirmed/OrderConfirmed";
import OrderDetails from "@/components/orderDetails/OrderDetails";

const Page = () => {
  // order Status data it will be come backend ==========
  const orderStatus = {
    ordered: {
      date: "17 jan,2024",
      isComplete: true,
    },
    shipping: {
      isComplete: false,
    },
    delivery: {
      date: "Jan 25-29",
      isComplete: false,
    },
  };
  // order Details data it will be come backend #####################
  const orderData = {
    confirmationNumber: "566842",
    shippingAddress: {
      name: "Smiles Davis",
      street: "600 montgomey St",
      cityStateZip: "San Francisco, CA 9858",
    },
    payment: {
      method: "Paypal",
      subtotal: 7000.0,
      shippingCost: 7800.0,
      taxAmount: 50.0,
    },
    totalItems: 3,
  };
  return (
    <div>
      <OrderConfirmed orderStatus={orderStatus} />
      <OrderDetails {...orderData} />
    </div>
  );
};

export default Page;