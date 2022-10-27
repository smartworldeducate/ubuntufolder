import React, { useState } from 'react';
import { SafeAreaView, ScrollView, RefreshControl, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Modal, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';
import Button from '../Components/Button/Button';

import LineSeprator from '../Components/LineSeprator/LineSeprator';
import ParentProfileHeader from '../Components/Header/ParentProfileHeader';
import LeftTextsRightImg from '../Components/ParentProfile/LeftTextsRightImg';


const ParentProfile = () => {

    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // initialCall();
        console.log("add", 2 + 2);
        setRefreshing(false);
        // console.log("calling again", initialCall());
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.white }}>

            <StatusBar barStyle={'default'} backgroundColor={colors.lightBlack} />

            <MainHeader
                onPressRightImg={() => navigation.goBack()}
                topLeftImg={"menu"}
                text={"Contact Us"}
                stuName={"Azaan Ali"}
                stuNumber={"170838"}
                campName={"Canal side Campus"}
                className={"Class 3 - Red"}
                stuImage={"student"}
                stuStatus={"On-Roll"}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white, marginVertical: hp(2) }}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        // we can implement multiple colors in the form of array 
                        colors={[colors.fbColor, colors.paratGreen, colors.red]}
                        // background color of the refresh indicator
                        progressBackgroundColor={colors.silverGrey}
                        tintColor={colors.appColor}

                    // title={"loading"}
                    // titleColor={colors.white}

                    // size between 0 to 1
                    // size={"large"}
                    />
                }

            >

                <Text style={{ fontSize: hp('2'), fontFamily: fontFamily.semiBold, color: colors.lightBlack, textAlign: "center", marginTop: hp('2') }}>Parent/Guardian Information</Text>

                <View style={{ marginHorizontal: wp('6'), marginTop: hp('2'), borderRadius: wp('3'), borderColor: colors.grey, borderWidth: wp('0.15'), paddingVertical: hp('1'), paddingHorizontal: wp('2') }}>
                    <ParentProfileHeader
                        leftImg={"father"}
                        text1={"Qasim Ali Khan"}
                        text2={"Father"}
                    />

                    <LineSeprator
                        style={styles.lineSeprator}
                    />

                    <LeftTextsRightImg
                        text1={"35401-1234567-8"}
                        text2={"CNIC"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <LeftTextsRightImg
                        text1={"0300-1234567"}
                        text2={"Phone Number"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <LeftTextsRightImg
                        text1={"qasim.ali@bh.edu.pk"}
                        text2={"Email"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <View style={{ marginBottom: hp('3') }}></View>

                    <ParentProfileHeader
                        leftImg={"mother"}
                        text1={"Ayesha Khan"}
                        text2={"Mother"}
                    />

                    <LineSeprator
                        style={styles.lineSeprator}
                    />

                    <LeftTextsRightImg
                        text1={"35401-1234567-8"}
                        text2={"CNIC"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <LeftTextsRightImg
                        text1={"0300-1234567"}
                        text2={"Phone Number"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <LeftTextsRightImg
                        text1={"ayeshan.khan@gmail.com"}
                        text2={"Email"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />
                </View>


                <Text style={{ fontSize: hp('2'), fontFamily: fontFamily.semiBold, color: colors.lightBlack, textAlign: "center", marginTop: hp('2') }}>Correspondence Information</Text>

                <View style={{ marginHorizontal: wp('6'), marginTop: hp('2'), borderRadius: wp('3'), borderColor: colors.grey, borderWidth: wp('0.15'), paddingVertical: hp('1'), paddingHorizontal: wp('2') }}>

                    <LeftTextsRightImg
                        text1={"Gulberg 3 gurumangat road lahore"}
                        text2={"Home Address"}
                        img={"edit"}
                        paddingHorizontal={wp('2')}
                    />

                    <LineSeprator
                        style={styles.lineSepratorBelow}
                    />

                    <LeftTextsRightImg
                        text1={"0300-1234567"}
                        text2={"Phone Number"}
                        paddingHorizontal={wp('2')}
                    />

                </View>

                <View style={{ marginBottom: hp('2') }}></View>



            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    lineSeprator: {
        height: hp('0.2'),
        backgroundColor: colors.appColor,
        marginVertical: hp('1'),
    },
    lineSepratorBelow: {
        height: hp('0.1'),
        backgroundColor: colors.grey,
        marginVertical: hp('1'),
    }

});
export default ParentProfile;