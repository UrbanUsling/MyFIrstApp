import React from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;  // Optional style prop
}
const Button1: React.FC<ButtonProps> = ({ title, onPress, style }) => {
    console.log("Inside button")
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};
export default React.memo(Button1);
