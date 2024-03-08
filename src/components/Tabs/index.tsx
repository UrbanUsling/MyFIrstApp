// Tabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 // Adjust the path as necessary
import { tabNavigatorStyles } from './styles';
import TabIcon from "../TabIcon";
import Splash from "../../screens/auth/Splash";
import Signup from "../../screens/auth/Signup";
import Signin from "../../screens/auth/Signin"; // Assuming you have a styles.ts file exporting `tabNavigatorStyles`


type TabParamList = {
    Home: undefined;
    Favorites: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Tabs: React.FC = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Favorites') {
                    iconName = focused ? 'heart' : 'heart-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <TabIcon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: tabNavigatorStyles.activeTintColor,
            tabBarInactiveTintColor: tabNavigatorStyles.inactiveTintColor,
        })}
    >
        <Tab.Screen name="Home" component={Splash} />
        <Tab.Screen name="Favorites" component={Signup} />
        <Tab.Screen name="Profile" component={Signin} />
    </Tab.Navigator>
);

export default Tabs;
