import NameSpace from "../name-space.js";

const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserInfo = (state) => state[NameSpace.USER].userInfo;

export {getAuthStatus, getUserInfo};
