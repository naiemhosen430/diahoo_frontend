
export const getToken = (tokenName) => {
    const token = localStorage.getItem(tokenName)
    return token
}
