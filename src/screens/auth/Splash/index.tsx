import react from 'react';
import {Button, Image, Pressable, Text, View} from "react-native";
import {styles} from "./styles.ts";
import Button1 from '../../../components/Button/index.tsx'
import Signup from "../Signup";
const Splash = () => {
    return(

        <View style={styles.container}>
        <Image resizeMode={"contain"} style={styles.image} source={require('../../../assets/Gonew.jpg')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find </Text>
                <Text style={[styles.title, styles.innerTitle]}>all you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>


            <Button1 title={"Sign up"} onPress={Signup} />

            <Pressable hitSlop={15}>
                <Text style={styles.signIn}>Sign in</Text>
            </Pressable>
        </View>
    )

}
export default Splash;