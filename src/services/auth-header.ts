   
  interface User {
    accessToken?: string
  }

  type AxiosRequestHeaders = Record<string, string | number | boolean>;

  export default function authHeader(): AxiosRequestHeaders {
    const user = JSON.parse(String(localStorage.getItem("user"))) as User | null
    // return user?.accessToken ? { "x-access-token": user.accessToken } : {}   for express.js
    return user?.accessToken ? { Authorization: 'Bearer ' + user.accessToken } : {}
  }

    // const userStr = localStorage.getItem("user");
    // let user = null;
    // if (userStr)
    //   user = JSON.parse(userStr);
    // if (user && user.accessToken) {
    //   return { Authorization: 'Bearer ' + user.accessToken };
    // } else {
    //   return {};
    // }
    //}


