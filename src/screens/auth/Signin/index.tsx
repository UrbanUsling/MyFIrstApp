
import {ScrollView, Text} from "react-native";
import {styles} from "./styles.ts";
import AuthHeader from "../../../components/AuthHeader";
import Splash from "../Splash";
import Input from "../../../components/Input";
import React from "react";

import Button1 from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {

    const onSignUp = () => {console.log('Hello')}

    return(

        <ScrollView style={styles.container}>
            <AuthHeader title={'Sign in'} onBackPress={Splash} />
            <Input label={"Email"} placeholder={"example@gmail.com"}/>
            <Input isPassword={true} label={"Password"} placeholder={"*********"}/>

            <Button1 style={styles.button} title='Sign in' onPress={Splash} />

            <Separator  text='Or sign in with' />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Dont have an account?
                <Text style={styles.footerLink} onPress={onSignUp}>Sign up</Text>
            </Text>
        </ScrollView>
    )

}
export default Signin;