import {StyleSheet} from "react-native";
import {colors} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 20,
        color: colors.blue,
        fontWeight: "500"
    },
    inputContainer: {
        borderWidth:1,
        borderColor:colors.grey,
        borderRadius: 14,
        flexDirection: "row", //gör att det kan delas upp i sektioner
        alignItems: "center"
    },
    input: {
        //borderWidth:1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        //borderColor:'yellow'
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})