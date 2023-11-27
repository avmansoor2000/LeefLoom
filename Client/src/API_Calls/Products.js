import instance from "./axiosinstance"




export const getProducts = async ()=>{
    try {
        const response = await instance.get("user/product-list")
    } catch (error) {
        return error.response.data
    }
}