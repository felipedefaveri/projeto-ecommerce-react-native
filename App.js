import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/pages/home/home'

function App() {
  return (
    <View>
      <Home/>
    </View>
  );
}
export default App;
