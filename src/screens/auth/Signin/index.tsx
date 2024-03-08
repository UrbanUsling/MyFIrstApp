
import {ScrollView, Text, View} from "react-native";
import {styles} from "./styles.ts";
import AuthHeader from "../../../components/AuthHeader";
import Splash from "../Splash";
import Input from "../../../components/Input";
import React from "react";

import Button1 from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
type RootStackParamList = {
    Signup: undefined;
    Splash: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Signin = () => {
    const navigation = useNavigation<NavigationProp>();
    const onSignup = () => {
        navigation.navigate('Signup');
    };
    const onBackPress = () => {
        navigation.goBack();
        console.log("trycker bak");
    };
    return(

        <ScrollView style={styles.container}>
            <View>
            <AuthHeader title={'Sign in'} onBackPress={onBackPress} />
            <Input label={"Email"} placeholder={"example@gmail.com"}/>
            <Input isPassword={true} label={"Password"} placeholder={"*********"}/>

            <Button1 style={styles.button} title='Sign in' onPress={Splash} />

            <Separator  text='Or sign in with' />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Dont have an account?
                <Text style={styles.footerLink} onPress={onSignup}>Sign up</Text>
            </Text>
            </View>
        </ScrollView>
    )

}
export default Signin;