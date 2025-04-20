import apiAxios from "@/config/apiAxios";

export const createpayment = async () => {
  try {
    const { data } = await apiAxios.post("/payments", {
      type: "credit_card",
      amount: 100,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
