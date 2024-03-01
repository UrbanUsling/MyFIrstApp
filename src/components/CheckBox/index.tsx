import React, {memo} from "react";
import {TouchableOpacity, View, Image} from "react-native";
import {styles} from "./styles.ts";


interface CheckboxProps {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/icon.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default memo(Checkbox);
