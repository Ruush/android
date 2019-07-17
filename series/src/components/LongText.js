import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from "react-native";

//android
NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isExpanded: false
        }
    }

    toggleIsExpanded() {
        const { isExpanded } = this.state;
        this.setState({
            isExpanded: !isExpanded
        });
    }

    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.spring();
    }

    render() {
        const { label = "", content = "-" } = this.props;
        const { isExpanded } = this.state;
        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell,
                    styles.label,
                ]}>
                    {label}
                </Text>
                {
                    content.length > 0
                        ? <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
                            <View>
                                <Text style={[
                                    styles.cell, styles.content, isExpanded ? styles.expanded : styles.collapsed
                                ]}>
                                    {content}
                                </Text>
                                <Text style={[styles.cell, styles.content]}>
                                    {isExpanded ? "Clique para recolher" : "[...] Clique para expandir"}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        : <Text style={[
                            styles.cell, styles.content, isExpanded ? styles.expanded : styles.collapsed
                        ]}>
                            {"Sem descrição!"}
                        </Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    label: {
        fontWeight: "bold",
        flex: 1,
        paddingBottom: 4,
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
    },
    content: {
        flex: 4,
        textAlign: "justify" //iOS
    },
    collapsed: {
        maxHeight: 65
    },
    expanded: {
        flex: 1
    }
})