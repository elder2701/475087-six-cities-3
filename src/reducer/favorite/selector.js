import NameSpace from "../name-space.js";

const getFavorites = (state) => state[NameSpace.FAVORITE].favorites;
const getSendingStatus = (state) => state[NameSpace.FAVORITE].sending;

export {getFavorites, getSendingStatus};
