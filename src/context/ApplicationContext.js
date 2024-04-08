import { createContext, useState } from "react";

export const AppContext = createContext({ loggedInUser: {} });

function ApplicationContext({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default ApplicationContext;
