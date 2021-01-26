import React from "react";
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";

import store from './src/store';
import Router from "./src/routers";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
