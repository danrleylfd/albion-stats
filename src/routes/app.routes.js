import Icon from '@expo/vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';

import GoldWatch from '../pages/GoldWatch';
import MarketWatch from '../pages/MarketWatch';
import Detail from '../pages/Detail';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

function TabScreen() {
  const Theme = useTheme();
  return (
    <AppTab.Navigator tabBarOptions={{
      tabStyle: { backgroundColor: Theme.colors.background },
      style: { borderTopColor: Theme.colors.card },
      activeTintColor: Theme.colors.primary,
      inactiveTintColor: Theme.colors.secondaryText
    }}>
      <AppTab.Screen name="Gold Watch" component={GoldWatch}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="monetization-on"
              focused={focused}
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          )
        }}
      />
      <AppTab.Screen name="Market Watch" component={MarketWatch}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="store"
              focused={focused}
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          )
        }}
      />
    </AppTab.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Tabs" component={TabScreen} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  );
}