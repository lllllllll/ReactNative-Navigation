import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

enableScreens();
import { Home, Profile, Musics, MusicLists } from "./screens";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function feedsDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function musicDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Musics" component={Musics} />
      <Stack.Screen name="MusicLists" component={MusicLists} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feeds" component={feedsDrawer} />
      <Drawer.Screen name="Musics" component={musicDrawer} />
    </Drawer.Navigator>
  );
};
