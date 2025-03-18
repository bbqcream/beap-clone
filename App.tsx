import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './src/navigations/tabNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
