import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';


const Challans = () => {


    const navigation = useNavigation();

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#606060" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white }}>
                <StatusBar barStyle={'light-content'} backgroundColor={"#606060"} />

                <MainHeader
                    onPressRightImg={() => navigation.goBack()}
                    topLeftImg={"backarrow"}
                    text={"Challans"}
                    stuName={"Azaan Ali"}
                    stuNumber={"170838"}
                    campName={"Canal side Campus"}
                    className={"Class 3 - Red"}
                    stuImage={"student"}
                    stuStatus={"On-Roll"}
                />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
export default Challans;