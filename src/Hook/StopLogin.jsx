import { getToken } from "./getToken"


const UseAuth = async () => {
    const token = getToken('accessToken')
    let Auth = true
    if (token) {
        Auth = false
    }
    return Auth
}

export default UseAuth
