import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from "react-redux";

import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text)
    };
    onPress() {
        const { todo } = this.props
        if (todo.id) {
            this.props.dispatchUpdateTodo(todo)
        } else {
            const { text } = this.props.todo;
            this.props.dispatchAddTodo(text);
        }
    };
    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttomContainer}>
                    <Button
                        onPress={() => this.onPress()}
                        title={id ? "Editar" : "Salvar"}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row"
    },
    inputContainer: {
        flex: 4
    },
    buttomContainer: {
        flex: 1
    }
})

// const mapDispatchtoProps = dispatch => {
//     return{
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }
//
//export default connect(null, mapDispatchtoProps)(TodoForm);
//
//OUTRO JEITO abaixo

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(mapStateToProps, {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
})(TodoForm);
