import Cookies from 'js-cookie'

const setToken = (token)=>{
    Cookies.set("token",token);
}

const getToken = (token)=>{
   return Cookies.get("token");

}

const removeToken = ()=>{
    Cookies.remove('token')
}

export {setToken, getToken, removeToken}