import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Golden",
});

export default UserContext;