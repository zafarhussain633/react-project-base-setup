import axios from "axios";

const getUsers = async () => {
   return await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
}


const addUsers =  (params) => {
   return axios.post("https://jsonplaceholder.typicode.com/posts",params)
}

export { getUsers, addUsers }

