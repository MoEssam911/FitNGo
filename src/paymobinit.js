import Pamob from "../node_modules/paymob";

const pamob = new Pamob({
  merchantId: "934482",
  apiKey:
    "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RNME5EZ3lMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuM1IwN0ttWExTSEtyQXVZYlhmN1R0MWR2VGRGOXRoZW1CTDVsU1lIVzkyd2FTZU9oMjllYnFRUDhDcGl4VmFEQS1ORE9nLUp4bVVkdDhJU3VvQml1VlE=",
});

export { pamob };

const pay = () => {
  const amount = 1000; // Amount in cents

  pamob
    .createPayment({
      amount,
      currency: "USD",
    })
    .then((paymentIntent) => {
      // Redirect the user to the Pamob payment page
      window.location.href = paymentIntent.url;
    })
    .catch((error) => {
      // Handle the error
    });
};
