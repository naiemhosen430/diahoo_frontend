
export const decodeToken = (token) => {
    const jwt = token
    const tokenParts = jwt.split('.');
    if (tokenParts.length !== 3) {
      throw new Error('Invalid JWT format');
    }
  
    const decodedPayload = atob(tokenParts[1]);
    const payloadObj = JSON.parse(decodedPayload);
  
    return payloadObj;
}
