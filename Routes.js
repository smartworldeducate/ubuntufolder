
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./SRC/Screens/Drawer/DrawerContent";

import Splash from './SRC/Screens/Splash';
import MobileNumperEnter from './SRC/Screens/MobileNumperEnter';
import OTPEnter from './SRC/Screens/OTPEnter';
import HomeScreen from './SRC/Screens/HomeScreen';

import Attendance from './SRC/Screens/Attendance';
import Assessment from './SRC/Screens/Assessment';
import Challans from './SRC/Screens/Challans';

import ViewAllNotifications from './SRC/Screens/ViewAllNotifications';
import AllPolicies from './SRC/Screens/Policies/AllPolicies';
import ContactUs from './SRC/Screens/ContactUs';

import WithdrawlRequest from './SRC/Screens/WithdrawlRequest/WithdrawlRequest';
import ParentProfile from './SRC/Screens/ParentProfile';
import Testing from './SRC/Screens/Testing';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




function DrawerStack() {
    return (

        // <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} DrawerContent={(props) => <DrawerContent {...props} />}>

        <Drawer.Navigator

            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false, drawerPosition: "right" }}


            drawerContent={(props) => (
                <DrawerContent  {...props} />

            )}>



            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Attendance" component={Attendance} />
            <Drawer.Screen name="Assessment" component={Assessment} />
            <Drawer.Screen name="Challans" component={Challans} />
            <Drawer.Screen name="ParentProfile" component={ParentProfile} />
            <Drawer.Screen name="WithdrawlRequest" component={WithdrawlRequest} />
            <Drawer.Screen name="ViewAllNotifications" component={ViewAllNotifications} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
            <Drawer.Screen name="AllPolicies" component={AllPolicies} />



            <Drawer.Screen name="Testing" component={Testing} />
        </Drawer.Navigator>

    );
}


const Routes = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName={"HomeScreen"}
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MobileNumperEnter" component={MobileNumperEnter} />
                <Stack.Screen name="OTPEnter" component={OTPEnter} />


                <Stack.Screen name="HomeScreen" component={DrawerStack} />

                {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}></Drawer.Navigator> */}


                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Attendance" component={Attendance} />
                <Stack.Screen name="Assessment" component={Assessment} />
                <Stack.Screen name="Challans" component={Challans} />
                <Stack.Screen name="ViewAllNotifications" component={ViewAllNotifications} />
                <Stack.Screen name="AllPolicies" component={AllPolicies} />
                <Stack.Screen name="ContactUs" component={ContactUs} />
                <Stack.Screen name="WithdrawlRequest" component={WithdrawlRequest} />
                <Stack.Screen name="ParentProfile" component={ParentProfile} />
                <Stack.Screen name="Testing" component={Testing} /> */}

                {/* </Drawer.Navigator> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;