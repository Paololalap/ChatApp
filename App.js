import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatApp from './ChatApp';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path accordingly

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ChatApp />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
