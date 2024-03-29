import React, {useState} from "react";
import {Image, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles.ts";

interface InputProps {
    label: string;
    placeholder: string;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible]= useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputContainer}>
                    <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

                    {isPassword && (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                    )}
                </View>
            </View>


    );
};

export default Input;