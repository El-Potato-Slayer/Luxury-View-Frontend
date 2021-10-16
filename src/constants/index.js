/* eslint-disable */
export const authHeader = {
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
  },
};
