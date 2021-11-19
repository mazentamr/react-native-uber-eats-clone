import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screen/Home"
import RestaurantDitals from './screen/RestaurantDitals';
import { Provider } from 'react-redux';
import store from './store';
import OrderCompleted from './screen/OrderCompleted';
export default function Navigation() {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false,
    };

    return (
        <Provider store={store} >
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDital" component={RestaurantDitals} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
