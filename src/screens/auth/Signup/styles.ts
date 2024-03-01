import {StyleSheet} from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,

    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },
    agreeTextBold: {
        fontWeight: "bold",
    },
    button: {
        marginVertical: 30,

    },
    footerText: {
        textAlign: "center",
        color: colors.blue,
        marginBottom: 10,
    },
    footerLink: {
        fontWeight: 'bold',
    }
})