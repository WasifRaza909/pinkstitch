import axios from "axios";

const API_URL = "/api/users/";

const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};

// const getGoals = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL, config);

//   return response.data;
// };

// const goalService = {
//   createGoal,
//   getGoals,
// };

const userService = {
  deleteUser,
};

export default userService;