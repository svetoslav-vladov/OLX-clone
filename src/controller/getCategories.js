import { serverUrl } from "../config/config";

const getCategories = async () => {
  let res = [];
  res = await fetch(`${serverUrl}/products/categories`);

  return await res.json();
};

export default getCategories;