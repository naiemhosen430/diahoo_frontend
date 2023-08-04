
function UseAuth() {
    const token = localStorage.getItem('accessToken')
    let Auth = true
    if (!token) {
        Auth = false
    }
    return Auth
}

export default UseAuth
