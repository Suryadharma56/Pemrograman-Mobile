import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import Detail from '../components/detail';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Detail'
        component={Detail}
        initialParams={{ icon: 'search1' }}
      />
      <Tab.Screen
        name='Create'
        component={Create}
        initialParams={{ icon: 'plus' }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
