import React from "react";
import {TouchableOpacity, Text, View, Pressable, Image} from "react-native";
import { styles } from "./styles";

interface ButtonProps {
    title: string;
    onBackPress: () => void;  // Add onPress as a second parameter
}

const AuthHeader: React.FC<ButtonProps> = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={15} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/bakpil.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default React.memo(AuthHeader);
