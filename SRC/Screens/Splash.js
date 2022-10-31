import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();
    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }

    }

    setTimeout(() => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{ name: 'MobileNumperEnter' }],
            }),
        );
        handleNavigate("MobileNumperEnter")
    }, 4000)

    return (
        <ImageBackground
            source={{ uri: "mainsplash" }}
            style={{ flex: 1 }}
            resizeMode={"stretch"}>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
});
export default Splash;