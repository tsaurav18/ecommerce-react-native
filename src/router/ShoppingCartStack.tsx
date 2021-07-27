import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AdddressFormScreen from '../screens/AddressFormScreen';
const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ShoppingCartScreen} name="ShoppingCart"
      options={{title:'Shopping Cart'}} />
      <Stack.Screen component={AdddressFormScreen} name="Address" 
       options={{title:'Address'}}/>
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
