import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

interface ChairProps {
    theme: string;
}

export const Chair: React.FC<ChairProps> = ({ theme }) => {
    const [isBig, setIsBig] = useState(false);

    useEffect(() => {
        console.log('Inside useEffect');
    }, []);

    function changeState() {
        setIsBig(!isBig);
    }

    return (
        <Text
            style={{
                fontSize: isBig ? 24 : 14,
                color: theme === 'dark' ? 'grey' : 'purple'
            }}
            onPress={changeState}
        >
            This is a chair
        </Text>
    );
};
