import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Styles/colors';
import MainHeader from '../../Components/Header/MainHeader';
import WithdrawlCentral from '../../Components/Withdrawl/WithdrawlCentral';


const WithdrawlRequest = () => {


    const navigation = useNavigation();

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.lightBlack }}>

            <StatusBar barStyle={'light-content'} backgroundColor={"#606060"} />

            <MainHeader
                onPressRightImg={() => navigation.goBack()}
                topLeftImg={"backarrow"}
                text={"Withdrawl Request"}
                stuName={"Azaan Ali"}
                stuNumber={"170838"}
                campName={"Canal side Campus"}
                className={"Class 3 - Red"}
                stuImage={"student"}
                stuStatus={"On-Roll"}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white, marginVertical: hp(2) }}>

                <View style={{ flexDirection: 'row', marginVertical: hp('3'), justifyContent: "space-around" }}>
                    <View style={{}}>
                        <WithdrawlCentral
                            text1={1}
                            text2={"Step 1"}
                        />
                    </View>

                    {/* <View style={{ height: hp('0.25'), backgroundColor: "red" }}>
                        <Text>kkkkk</Text>
                    </View> */}

                    <View style={{}}>
                        <WithdrawlCentral
                            text1={2}
                            text2={"Step 2"}
                        />
                    </View>

                    <View style={{}}>
                        <WithdrawlCentral
                            text1={3}
                            text2={"Step 3"}
                        />
                    </View>

                    <View style={{}}>
                        <WithdrawlCentral
                            text1={4}
                            text2={"Step 4"}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
export default WithdrawlRequest;