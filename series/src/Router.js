import { createAppContainer, createStackNavigator } from "react-navigation"

import LoginPage from "./pages/LoginPage";
import SeriesPage from "./pages/SeriesPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SerieFormPage from "./pages/SerieFormPage";

const AppNavigator = createStackNavigator({
  "SerieForm": {
    screen: SerieFormPage,
    navigationOptions: {
      title: "Nova Serie",
      headerTitleStyle: {
        color: "white",
        fontSize: 35,        
        textAlign: "center"
      }
    }
  },
  "Main": {
    screen: SeriesPage,
    navigationOptions: {

    }
  },
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
  "SerieDetail": {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      if (serie.title.length > 16) {
        return {
          title: serie.title,
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
          }
        }
      } else {
        return {
          title: serie.title,
          headerTitleStyle: {
            color: "white",
            fontSize: 35,
          }
        }
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
