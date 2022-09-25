import useAxios from "helpers/useAxios";

const getUsers = async () => {
   return await useAxios.get(`/todos`)
}

const addUsers =  (params) => {
   return useAxios.post("/posts",params)
}

export { getUsers, addUsers }

