import React, { useState } from 'react';
import { SafeAreaView, RefreshControl, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/native';
import DrawerHeader from '../../Components/Drawer/DrawerHeader';
import DrawerList from '../../Components/Drawer/DrawerList';
import colors from '../../Styles/colors';

const DrawerContent = ({ }) => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.white }}>
            <View style={{ paddingLeft: wp('3') }}>

                <View style={{ marginTop: hp('2') }}>
                    <DrawerHeader
                        leftText={"Menu"}
                        rightImg={"menublue"}
                    // onPressRightImg={() => navigation.closeDrawer()}
                    />
                </View>

                <View style={{ marginVertical: hp('2') }}>
                    <DrawerList
                        leftImg={"home"}
                        rightText={"Home"}
                        onPress={() => navigation.navigate("Home")}
                    />

                    <DrawerList
                        leftImg={"attendancegrey"}
                        rightText={"Attendance"}
                        onPress={() => navigation.navigate("Attendance")}
                    />

                    <DrawerList
                        leftImg={"attendancegrey"}
                        rightText={"Assessments"}
                        onPress={() => navigation.navigate("Assessment")}
                    />

                    <DrawerList
                        leftImg={"challangrey"}
                        rightText={"Challans"}
                        onPress={() => navigation.navigate("Challans")}
                    />

                    <DrawerList
                        leftImg={"parentsprofile"}
                        rightText={"Parents Profile"}
                        onPress={() => navigation.navigate("ParentProfile")}
                    />

                    <DrawerList
                        leftImg={"parentsprofile"}
                        rightText={"Withdrawal Request"}
                        onPress={() => navigation.navigate("WithdrawlRequest")}
                    />

                    {/* <DrawerList
                    leftImg={"attendancegrey"}
                    rightText={"Notifications"}
                    onPress={()=>navigation.navigate("ViewAllNotifications")}
                /> */}

                    <DrawerList
                        leftImg={"challangrey"}
                        rightText={"Contact Us"}
                        onPress={() => navigation.navigate("ContactUs")}
                    />

                    <DrawerList
                        leftImg={"parentsprofile"}
                        rightText={"Policies"}
                        onPress={() => navigation.navigate("AllPolicies")}
                    />

                    <DrawerList
                        leftImg={"logoutgrey"}
                        rightText={"Logout"}
                    // onPress={()=>navigation.navigate("")}
                    />
                </View>



            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({

});

export default DrawerContent;