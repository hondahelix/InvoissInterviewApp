import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './src/Navigation/Navigation';
import {StyleSheet, Text, View} from "react-native";


const App = () => {
    return (
        <NavigationContainer>
            <MainTabScreen />
        </NavigationContainer>
    );

}
export default App;



