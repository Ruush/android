import { createAppContainer, createStackNavigator } from "react-navigation"

import LoginPage from "./pages/LoginPage";
import SeriesPage from "./pages/SeriesPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SerieFormPage from "./pages/SerieFormPage";

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
  "SerieForm": {
    screen: SerieFormPage,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      let title = "Nova Serie"
      let fontSize = 35
      if (params && params.serieToEdit) {
        title = params.serieToEdit.title
      }
      if (title.length > 16 & title.length <= 25) {
        fontSize = 25
      } else if (title.length > 25) {
        fontSize = 18
      }
      if (params && params.serieToEdit) {
        return {
          title: title,
          headerTitleStyle: {
            color: "white",
            fontSize: fontSize,
            textAlign: "center"
          }
        }
      } else {
        return {
          title: "Nova Serie",
          headerTitleStyle: {
            color: "white",
            fontSize: 35,
            textAlign: "center"
          }
        }
      }
    }
  },
  "SerieDetail": {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      let fontSize = 35
      if (serie.title.length > 16 & serie.title.length <= 25) {
        fontSize = 25
      } else if (serie.title.length > 25) {
        fontSize = 18
      }
      if (serie.title.length > 16) {
        return {
          title: serie.title,
          headerTitleStyle: {
            color: "white",
            fontSize: fontSize,
          }
        }
      } else {
        return {
          title: serie.title,
          headerTitleStyle: {
            color: "white",
            fontSize: fontSize,
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
