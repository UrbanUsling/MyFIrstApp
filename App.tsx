/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';

import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";


const WEB_CLIENT_ID = ''

function App(): React.JSX.Element {
    useEffect(() => {

        }, [])

    return (
        <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
        <View>
            <Signin />
        </View>
        </ScrollView>
        </SafeAreaView>


  );
}

export default App;
