import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './src/navigations/tabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/login.tsx';
import MoveApply from './src/screens/moveApply.tsx';
import Move from './src/screens/move';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="로그인">
        <Stack.Screen
          name="로그인"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="실이동"
          component={Move}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="실신청"
          component={MoveApply}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
