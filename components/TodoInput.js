import React, { Component } from 'react'
import { View, Alert, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import uuid from 'uuid';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            completed: false
        }
    }

    addTodoHandler = () => {
        if (this.state.title.length === 0) {
            Alert.alert(
                "Not Valid",
                "Please enter something in the Input box...",
                [
                    { text: "OK" }
                ]
            );
        } else {
            const id = uuid.v4();
            this.props.addTodo({ id, ...this.state })
            this.setState({ title: '' })
        }
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.wrapper}>
                    <TextInput value={this.state.title} style={styles.inputBox} placeholder="Enter todo.." onChangeText={(val) => this.setState({ title: val })} />
                    <TouchableOpacity activeOpacity={0.9} onPress={this.addTodoHandler} style={styles.addBtn}>
                        <Entypo name="circle-with-plus" size={24} color="#f40552" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        minHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#f8f3eb',
        borderRadius: 10
    },
    inputBox: {
        width: '85%',
        height: 40,
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    addBtn: {
        width: '15%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#f40552'

    }
})


export default connect(null, { addTodo })(TodoInput);