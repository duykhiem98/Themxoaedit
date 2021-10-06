import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListScreen } from "../screens/listscreen/ListScreen";
import { EditScreen } from "../screens/EditScreen/EditScreen";
import { Item } from "../screens/listscreen/Item";
import Header from "react-native/Libraries/NewAppScreen/components/Header";
import { MainScreen } from "../screens/CategoryScreen/MainScreen";
import { CategoryScreen } from "../screens/CategoryScreen/CategoryScreen";
import { EditCategory } from "../screens/CategoryScreen/EditCategory";

const Stack = createNativeStackNavigator();

const Route=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="EditCategory" component={EditCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
