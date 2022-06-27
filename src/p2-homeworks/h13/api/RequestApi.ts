import axios from "axios";

export const RequestApi = {
onSuccess:(newSuccess: boolean) => axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: newSuccess})
}
