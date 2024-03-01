import {StyleSheet} from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize:40,
        fontWeight:'bold',
        textAlign: 'center',

    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    signIn: {
        color:colors.blue,
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 16,
        marginTop: 20,
    },
    titleContainer: {
        marginVertical: 54,
    }
})