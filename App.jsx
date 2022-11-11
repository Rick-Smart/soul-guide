import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import AuthContext from "./auth/context";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import authStorage from "./auth/storage";
import AppLoading from "expo-app-loading";

// ------------------------------------------------------------------------
// stand alone components for testing ONLY!
// ------------------------------------------------------------------------

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    // With this on the navigation transitions look dirty and poorly timed.
    // background: "transparent",
  },
};

export default function App() {
  // ------------------------------------------------------------------------
  // Test states ONLY!
  // ------------------------------------------------------------------------
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);

    setIsReady(true);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("Error")}
      />
    );
  // ------------------------------------------------------------------------
  // Test functions ONLY!
  // ------------------------------------------------------------------------
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={theme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
