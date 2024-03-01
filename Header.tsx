// Header.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Import your image here
import HeaderImage from './src/assets/Gonew.jpg';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={HeaderImage} style={styles.image} />
            {/* You can add more content here if needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
});

export default Header;
