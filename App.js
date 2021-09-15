import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from "./screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from './screens/shop/ProductDetailScreen'
import { Platform } from "react-native";

import productsReducer from "./store/reducers/products-reducer";
import Colors from "./constants/Colors";

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Product Overview"
            component={ProductOverviewScreen}
            options={{
              title: "All Products",
              headerStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.primary : "",
              },
              headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primary,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({route}) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.primary : "",
              },
              headerTintColor:
                Platform.OS === "android" ? "white" : Colors.primary,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
