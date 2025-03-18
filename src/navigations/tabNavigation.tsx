import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/main';
import {Dimensions, Image} from 'react-native';

const BottomTab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: '#305B7D',
        tabBarInactiveTintColor: '#323A45',
        tabBarLabelStyle: {
          fontSize: width * 0.03,
        },
      }}>
      <BottomTab.Screen
        name="홈"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/home.png')}
              style={{
                width: width * 0.06,
                height: height * 0.027,
                tintColor: focused ? '#305B7D' : '#323A45',
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
