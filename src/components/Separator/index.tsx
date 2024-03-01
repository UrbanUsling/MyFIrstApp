import React, {memo, useState} from "react";
import {Text, View} from "react-native";
import {styles} from "./styles.ts";

interface SeparatorProps {
    text: string;
}

const Separator: React.FC<SeparatorProps> = ({text}) => {
    const [isPasswordVisible, setIsPasswordVisible]= useState(false);


    return (
            <View style={styles.container}>
                <View style={styles.line} />
                    <Text>{text}</Text>
                <View style={styles.line} />
            </View>
    );
};

export default memo(Separator);