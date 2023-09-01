import protectedRequest from "helpers/protectRequest";
import useAxios from "helpers/useAxios";

const getUsers = async () => {
  return await protectedRequest(() => useAxios.get(`/todos`));
};

const addUsers = async (params) => {
  return await protectedRequest(() => useAxios.post("/posts", params));
};

export { getUsers, addUsers };
