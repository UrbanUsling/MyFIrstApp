import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TabIconProps = {
    name?: string; // The '?' makes the name prop optional
    size: number;
    color: string;
};

const TabIcon: React.FC<TabIconProps> = ({ name, size, color }) => {
    if (!name) {
        // Handle the case where name is not provided
        // For example, return null or a default icon
        return null; // or return <Ionicons name="default-icon" size={size} color={color} />;
    }

    return <Ionicons name={name} size={size} color={color} />;
};

export default TabIcon;