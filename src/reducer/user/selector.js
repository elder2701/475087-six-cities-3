import NameSpace from "../name-space.js";

const getAuthStatus = (state)=> state[NameSpace.USER].authorizationStatus;

export {getAuthStatus};
