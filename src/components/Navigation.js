import React, {useContext} from 'react';

import GroceryScreen from './GroceryScreen';
import StatsScreen from './StatsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Courses') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Statistiques') {
              iconName = 'line-chart';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
        })}>
        <Tab.Screen name="Courses" component={GroceryScreen} />
        <Tab.Screen name="Statistiques" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
