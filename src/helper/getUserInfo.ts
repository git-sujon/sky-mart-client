import { authKey } from "@/constants/storageKeys"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage } from "@/utils/localStorage"
import { jwtDecode } from "jwt-decode"

export const getUserInfo = () => {
    const userToken = getFromLocalStorage(authKey)

    if (userToken) {
        const decodeData = decodedToken(userToken);
    
        return decodeData;
      } else {
        return "";
      }

}

