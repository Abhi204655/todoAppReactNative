import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

class ChangeTheme extends React.Component {
    state = {
        darkMode: false
    }
    toggleTheme = () => {
        this.setState({
            darkMode: !this.state.darkMode
        })
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.toggler} onPress={this.toggleTheme}>
                {this.state.darkMode ? (<Fontisto name="day-cloudy" size={24} color="white" />) : (<Ionicons name="ios-cloudy-night" size={24} color="black" />)}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    toggler: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: '#f40552',
        position: 'absolute',
        bottom: 30,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ChangeTheme;