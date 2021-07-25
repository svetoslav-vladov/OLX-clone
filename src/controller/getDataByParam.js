import { serverUrl } from "../config/config";

const getDataByParam = async (props) => {
  const { categoryName, id } = props;

  const idParam = id ? `${id}` : '';

  try {
    const res = await fetch(`${serverUrl}/category/${categoryName}/${idParam}`);
  } catch (error) {
    return {
      error: true,
      msg: error
    };
  }

  return await res.json();
};

export default getDataByParam;