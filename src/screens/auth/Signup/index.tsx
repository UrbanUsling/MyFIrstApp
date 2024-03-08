
import {ScrollView, Text, View} from "react-native";
import {styles} from "./styles.ts";
import AuthHeader from "../../../components/AuthHeader";
import Splash from "../Splash";
import Input from "../../../components/Input";
import React, {useState} from "react";
import Checkbox from "../../../components/CheckBox";
import Button1 from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
type RootStackParamList = {
    Splash: undefined;
    Signin: undefined;
    // ... other routes
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Signup = () => {
    const navigation = useNavigation<NavigationProp>();
    const[checked, setChecked] = useState(false);

    const onBackPress = () => {
        navigation.goBack();
    };
    const onSignin = () => {
        navigation.navigate('Signin');
    };

    return(
        <ScrollView>
        <View style={styles.container}>
            <AuthHeader title={'Sign up'} onBackPress={onBackPress} />
            <Input label={"Name"} placeholder={"John Doe"}/>
            <Input label={"Email"} placeholder={"example@gmail.com"}/>
            <Input isPassword={true} label={"Password"} placeholder={"*********"}/>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button1 style={styles.button} title='Sign in' onPress={onSignin} />

            <Separator  text='Or sign up with' />
            <GoogleLogin />
            <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink} onPress={onSignin}>Sign in</Text>
            </Text>

        </View>
        </ScrollView>
    )

}
export default Signup;