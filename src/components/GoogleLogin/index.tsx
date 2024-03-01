import React from "react";
import {TouchableOpacity, Text, StyleProp, ViewStyle, Image} from "react-native";
import { styles } from "./styles";

interface GoogleLoginProps {

}
const GoogleLogin: React.FC<GoogleLoginProps> = () => {
    console.log("Inside button")
    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.container]}>
            <Image style={styles.image} source={require('../../assets/Vector.png')} />
        </TouchableOpacity>
    );
};
export default React.memo(GoogleLogin);
