import {StyleSheet} from "react-native";
import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    line: {
        height: 2,
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
    text: {
        color: colors.blue,
        fontWeight: "500",
        marginHorizontal: 1,
    },
})