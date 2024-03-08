// Splash.tsx
import {Image, Pressable, ScrollView, Text, View} from "react-native";
import { styles } from "./styles";
import Button1 from '../../../components/Button/index.tsx';

import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    Signup: undefined;
    Signin: undefined;
    // ... other routes
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
// Modify your Splash component to use the correct type
const Splash = () => {
    const navigation = useNavigation<NavigationProp>();
    console.log('navigation', navigation);

    const onSignup = () => {
        navigation.navigate('Signup');
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image resizeMode={"contain"} style={styles.image} source={require('../../../assets/Gonew.jpg')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find </Text>
                <Text style={[styles.title, styles.innerTitle]}>all you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button1 title={"Sign up"} onPress={onSignup} />

            <Pressable hitSlop={15} onPress={onSignin}>
                <Text style={styles.signIn}>Sign in</Text>
            </Pressable>
        </View>
        </ScrollView>
    );
};

export default Splash;
