import axios from "axios";

export const getAllProducts = async (category) => {
  const data = await axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .catch((err) => console.log("error occured in the API sectoin", err));
  console.log(data);
  return data;
};
