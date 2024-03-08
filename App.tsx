/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';

import Signup from "./src/screens/auth/Signup";
import Splash from "./src/screens/auth/Splash";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {colors} from "./utils/colors";
import Signin from "./src/screens/auth/Signin";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
    const isSignedIn = true;

    const theme = {
        dark: false,
        colors: {
            primary: colors.white,
            background:  colors.white,
            card:  colors.white,
            text:  colors.white,
            border:  colors.white,
            notification:  colors.white,
        }
    }

    return (

        <SafeAreaProvider>
            <NavigationContainer theme={theme} >

                <Stack.Navigator>
                    {isSignedIn ?(
                        <>
                            <Stack.Screen name="Tabs" component={Tabs} />
                        </>
                    ) : (
                    <>
                    <Stack.Screen name="Home" component={Splash}/>
                    <Stack.Screen name="Signin" component={Signin} />
                    <Stack.Screen name="Signup" component={Signup} />
                    </>
                    )}

                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>


  );
}

export default App;
