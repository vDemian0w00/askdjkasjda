import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AgregarMascota from "../screens/AgregarMascota";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerActiveBackgroundColor: "#48c8e8",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#000",
          drawerType: "front",
          headerStyle: {
            backgroundColor: "#48c8e8",
          },
          headerTitle: () => <Text>🐶 Mascotas</Text>,
        }}
      >
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>🏠</Text>,
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Text>➕</Text>,
          }}
          name="Agregar"
          component={AgregarMascota}
        />
      </Drawer.Navigator>
  );
};

const StackNavigation = () => {

  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
