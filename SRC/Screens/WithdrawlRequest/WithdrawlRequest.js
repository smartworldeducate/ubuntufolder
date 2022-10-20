import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Styles/colors';
import MainHeader from '../../Components/Header/MainHeader';
import WithdrawlCentral from '../../Components/Withdrawl/WithdrawlCentral';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


const WithdrawlRequest = () => {


    const navigation = useNavigation();
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onPressStep1Btn = () => {
        setStep2(true);
        setStep1(false);
    }

    const onPressStep2Back = () => {
        setStep2(false);
        setStep1(true);
    }

    const onPressStep2Next = () => {
        setStep3(true);
        setStep1(false);
        setStep2(false);
    }

    const onPressStep3Back = () => {
        setStep3(false);
        setStep1(false);
        setStep2(true);
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

                <View style={styles.mainView}>
                    <View style={styles.mainInnerView}>
                        <WithdrawlCentral
                            backgroundColor={step1 ? colors.appDarkColor : colors.grey}
                            text1={1}
                            text2={"Step 1"}
                        />
                    </View>

                    <View style={styles.centralStarightLine}></View>

                    <View style={styles.mainInnerView}>
                        <WithdrawlCentral
                            backgroundColor={step2 ? colors.appDarkColor : colors.grey}
                            text1={2}
                            text2={"Step 2"}
                        />
                    </View>

                    <View style={styles.centralStarightLine}></View>

                    <View style={styles.mainInnerView}>
                        <WithdrawlCentral
                            backgroundColor={step3 ? colors.appDarkColor : colors.grey}
                            text1={3}
                            text2={"Step 3"}
                        />
                    </View>

                    <View style={styles.centralStarightLine}></View>

                    <View style={styles.mainInnerView}>
                        <WithdrawlCentral
                            backgroundColor={colors.grey}
                            text1={4}
                            text2={"Step 4"}
                        />
                    </View>

                </View>

                {
                    step1 &&
                    <Step1
                        onPressStep1Btn={onPressStep1Btn}
                        step1Text={"Use the online image color picker above to select a color and get the HTML Color Code of this pixel. Also you get the HEX color code value, RGB value and HSV value. Under 'Use Your Image' You can upload your own image (for example an screenshot of your desktop), paste an image from clipboard, put a picture url in the textbox below. Or use an website url, you will see a thumbnail on the left side."}
                    />
                }

                {
                    step2 &&
                    <Step2
                        onPressBack={onPressStep2Back}
                        onPressNext={onPressStep2Next}
                    />
                }

                {
                    step3 &&
                    <Step3
                    onPressBack={onPressStep3Back}
                    />
                }

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        margin: hp('3')
    },
    mainInnerView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centralStarightLine: {
        flex: 0.25,
        height: hp('0.25'),
        marginTop: hp('3'),
        justifyContent: 'center',
        backgroundColor: colors.grey
    }

});
export default WithdrawlRequest;