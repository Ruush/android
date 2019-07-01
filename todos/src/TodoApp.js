import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import rootReducer from './reducers';


const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
})