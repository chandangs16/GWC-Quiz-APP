/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import GetQuestion from './src/components/GetQuestion';
import StudentHome from './src/components/StudentHome';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    
    return (
        <GetQuestion />

    );
  }
}

const App = StackNavigator({
  StudentHome: {screen: StudentHome},
  GetQuestion: {screen: GetQuestion},
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default App;