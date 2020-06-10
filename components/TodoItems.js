import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, SafeAreaView, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider, CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';
import { getTodoes, markCompleted, deleteTodo } from '../redux/actions/todoActions';



class TodoItems extends Component {
    state = {
        isSelected: false,
        deleteAnim: new Animated.Value(1),
        darkMode: true
    }

    deleteFade = () => {
        Animated.timing(this.state.deleteAnim, {
            toValue: 0,
            duration: 1000
        }).start()
    }

    setSelection = (id) => {
        this.props.markCompleted(id);
    }

    componentDidMount() {
        this.props.getTodoes();
    }

    deleteTodoHandler = (id) => {
        this.props.deleteTodo(id);
    }
    renderItem = (todo) => {
        const { textColor, primaryColor } = this.props;
        return (
            <Animated.View key={todo.id} style={{ opacity: this.state.fadeAnim }}>
                <View style={styles.todo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            left
                            checked={todo.completed}
                            onPress={() => this.setSelection(todo.id)}
                            checkedColor="#f40552"
                        />
                        <Text style={{ marginLeft: 5, textDecorationLine: todo.completed ? 'line-through' : 'none', textDecorationStyle: 'solid' }} >{todo.title}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.deleteTodoHandler(todo.id)} style={styles.deleteBtn}>
                        <AntDesign name="delete" size={24} color="#f40552" />
                    </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: primaryColor }} />
            </Animated.View>
        )
    }

    render() {
        const { todoes } = this.props;
        if (!todoes) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="grey" />
                </View>
            );
        }
        else {
            if (todoes.length === 0) {
                return (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <MaterialCommunityIcons name="timer-sand-empty" size={100} color="#f40552" />
                        <Text style={{ fontSize: 20, color: '#f40552' }}>No Item to show in the list</Text>
                    </View>
                );
            }
            else {
                return (
                    <SafeAreaView style={styles.todoContainer}>
                        <FlatList
                            data={todoes}
                            renderItem={({ item }) => this.renderItem(item)}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                )
            }
        }

    }
}

const styles = StyleSheet.create({
    todoContainer: {
        width: '90%',
        flexDirection: 'column',
    },
    todo: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 1,
        elevation: 3

    }
})


const mapStateToProps = state => ({
    todoes: state.todo.todoes
})

export default connect(mapStateToProps, { getTodoes, markCompleted, deleteTodo })(TodoItems);