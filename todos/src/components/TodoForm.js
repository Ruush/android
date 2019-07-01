import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from "react-redux";

import Input from './Input';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
    }
    onChangeText(text) {
        this.setState({
            text
        })
    }
    onPress() {
        this.props.dispatchAddTodo(this.state.text);
        this.setState({ text: "" });
    }
    render() {
        const { text } = this.state

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
                        title="Salvar"
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

export default connect(null, {
    dispatchAddTodo: addTodo
})(TodoForm);
