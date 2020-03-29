import NameSpace from "../name-space.js";

const getFavorites = (state) => state[NameSpace.FAVORITE].favorites;

export {getFavorites};
