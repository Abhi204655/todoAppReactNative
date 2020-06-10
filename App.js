import React from 'react';
import { View, Dimensions, Image, StatusBar, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChangeTheme from './components/ChangeTheme';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width } = Dimensions.get('screen')
    return (
      <Provider store={store}>
        <Image source={require('./assets/background.png')} style={{ ...styles.backgroundImage, width: '100%', height: '100%' }} />
        <TouchableWithoutFeedback style={{ width, height }} onPress={() => Keyboard.dismiss()} accessible={false}>
          <View style={styles.container}>
            <TodoInput />
            <TodoItems />
            <ChangeTheme />
          </View>
        </TouchableWithoutFeedback>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center'
  },
  backgroundImage: {
    marginTop: StatusBar.currentHeight,
    position: 'absolute',
    top: 0,
    left: 0
  }
})

export default App;