import { StyleSheet } from "react-native";
import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius:14,
        width: '45%',
        alignSelf: "center",
        alignItems: "center",
        padding: 16,
    },
    image: {
        width:20,
        height: 20,
    }
})