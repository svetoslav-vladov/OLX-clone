import { serverUrl } from "../config/config";

const getDataByParam = async (props) => {
  const { categoryName, id } = props;
  const idParam = id ? `${id}` : '';

  let res = [];

  res = await fetch(`${serverUrl}/category/${categoryName}/${idParam}`);
  console.log(res.json());
  return await res.json();
};

export default getDataByParam;