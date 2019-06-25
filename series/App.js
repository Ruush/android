import { createAppContainer, createStackNavigator } from "react-navigation"

import LoginScreen from "./src/pages/LoginScreen"

const AppNavigator = createStackNavigator({
  "Login": {
    screen: LoginScreen,
    navigationOptions: {
      title: "Bem vindo!",
      headerTitleStyle: {
        color: "white",
        fontSize: 35,
        flexGrow: 1,
        textAlign: "center"
      }
    }
  },
}, {
    defaultNavigationOptions: {
      title: "Series!",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#6ca2f7",
        borderBottomWidth: 1,
        borderBottomColor: "#C5C5C5",
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 35,
      }
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
