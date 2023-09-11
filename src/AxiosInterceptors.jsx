// import Axios from "axios";
// const API_BASE_URL="";
// async function refreshAccessToken() {
//   try {
//     const response = await Axios.post("https://fts-backend.onrender.com/admin/refreshToken", {
//       refreshToken: "your-refresh-token",
//     });
//     const newAccessToken = response.data.accessToken;
//     return newAccessToken;
//   } catch (error) {
//     throw error;
//   }
// }
// const handle401Error = async (error) => {
//   const newAccessToken = await refreshAccessToken();
//   error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
//   return Axios(error.config);
// };
// const setupInterceptors = () => {
//   Axios.defaults.baseURL = API_BASE_URL;
//   Axios.defaults.headers.post["Content-Type"] = "application/json";
//   Axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
//   Axios.defaults.headers["Access-Control-Allow-Headers"] = "*";
//   Axios.defaults.headers["Access-Control-Allow-Methods"] =
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE";
//   Axios.defaults.validateStatus = () => true;
//   Axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("ACCESS_TOKEN");
//       const baseURL = API_BASE_URL;
//       config.headers["user-tz"] = new Date().getTimezoneOffset();
//       if (token) {
//         config.baseURL = baseURL;
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
//   Axios.interceptors.response.use(
//     (response) => {
//       // Process response body
//       if (
//         response.status &&
//         (parseInt(response.status, 0) > 205) | response?.data?.message
//       ) {
//         switch (response?.status | response?.data?.message) {
//           case 500:
//             if (response?.data?.message === "No data Found") {
//             //   notification({
//             //     message: "No data found",
//             //     type: "error",
//             //     duration: 1000,
//             //   });
//             } else {
//             //   sweettoast({
//             //     title: "Something went wrong",
//             //     type: "error",
//             //     duration: 1000,
//             //   });
//             }
//             break;
//           case 401:
//             // sweettoast({
//             //   message: response?.data?.message,
//             //   type: "error",
//             //   duration: 1000,
//             // });
//             localStorage.clear();
//             window.location.replace("/");
//             handle401Error(response);
//             break;

//         //   case 403:
//         //     // notification({
//         //     //   message: "Network Error",
//         //     //   type: "error",
//         //     //   duration: 1000,
//         //     // });
//         //     throw new ApiError(
//         //       ERRORS.FORBIDDEN_ERROR,

//         //       response && response.data && response.data.Message
//         //         ? response.data.Message
//         //         : "Network Error"
//         //     );

//         //   case 406:
//         //     notification({
//         //       message: "Network Error",
//         //       type: "error",
//         //       duration: 1000,
//         //     });

//         //     throw new ApiError(
//         //       ERRORS.UNAUTHORISED_ERROR,
//         //       response.data.error.message
//         //     );

//         //   case 400:
//         //     sweettoast({
//         //       message: response?.data?.message,
//         //       type: "error",
//         //       duration: 1000,
//         //     });
//         //     throw new ApiError(
//         //       ERRORS.UNAUTHORISED_ERROR,
//         //       response?.data?.response_message
//         //     );

//         //   case 404:
//         //     notification({
//         //       message: "No Data Found",
//         //       type: "error",
//         //       duration: 2000,
//         //     });
//         //     throw new ApiError(ERRORS.CLIENT_ERROR);
//           default:
//             // sweettoast({
//             //   title: "Something went wrong. Please try again",
//             //   type: "error",
//             //   duration: 1000,
//             // });
//             // throw new ApiError(ERRORS.CLIENT_ERROR);
//         }
//       } else {
//         return response;
//       }
//     },

//     (error) => {
//       Promise.reject(error);
//     }
//   );
// };

// /**
//  * Set auth token as default in Axios
//  * @param token
//  */
// export default setupInterceptors;
