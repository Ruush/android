import { createAppContainer, createStackNavigator } from "react-navigation"

import LoginPage from "./pages/LoginPage";
import SeriesPage from "./pages/SeriesPage";

const AppNavigator = createStackNavigator({
  "Login": {
    screen: LoginPage,
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
  "Main": {
    screen: SeriesPage,
    navigationOptions: {

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
