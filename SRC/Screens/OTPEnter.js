import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, ImageBackground, TextInput, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';

import { CodeField, Cursor, useBlurOnFulfill, isLastFilledCell, MaskSymbol, useClearByFocusCell } from 'react-native-confirmation-code-field';

import OTPInputView from '@twotalltotems/react-native-otp-input';

import { useDispatch, useSelector } from 'react-redux';

import { clearState, OTPCodeAction } from "../Redux/Features/PhoneNumberSignUp/EnterOTPSignUpKit";

import colors from '../Styles/colors';
import fontFamily from "../Styles/fontFamily";
import Button from '../Components/Button/Button';
import { concat } from 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import Loader from '../Components/Loader/Loader';


const CELL_COUNT = 4;

const OTPEnter = ({ route }) => {

    const [firstOTP, setFirstOTP] = useState("");
    const [secondOTP, setSecondOTP] = useState("");
    const [thirdOTP, setThirdOTP] = useState("");
    const [fourthOTP, setFourthOTP] = useState("");
    const [totalOTP, setTotalOTP] = useState('');
    const [value, setValue] = useState('');

    const [deviceType, setDeviceType] = useState("android");
    const [deviceIdentifier, setDeviceIdentifier] = useState("asdf");
    const [deviceToken, setDeviceToken] = useState("asdf");

    // console.log("routeParamsDeviceType", route.params.deviceTypeParam);
    // console.log("routeParamsMobile", route.params.contactNumberParam);
    // console.log("routeParamsDeviceIdentifier", route.params.deviceIdentifierParam);
    // console.log("routeParamsDeviceToken", route.params.deviceTokenParam);


    const onChangeFirstOTP = (val) => {
        setFirstOTP(val);
        setValuesObj({ ...valuesObj, pin_code_sms: val })
    }

    console.log("firstOTP", firstOTP);

    const [valuesObj, setValuesObj] = useState({

        device_type: route.params.deviceTypeParam,
        sms_number: route.params.contactNumberParam,
        device_identifier: route.params.deviceIdentifierParam,
        device_token: route.params.deviceTokenParam,
        pin_code_sms: firstOTP,
        // is_debug: "",
    });


    // console.log("typeof1", typeof (valuesObj.device_type));
    // console.log("typeof2", typeof (valuesObj.sms_number));
    // console.log("typeof3", typeof (valuesObj.device_identifier));
    // console.log("typeof4", typeof (valuesObj.pin_code_sms));


    const dispatch = useDispatch();
    // const OTPCodeHere = useSelector((state) => state.OTPCodeStore);
    const OTPCodeHere = useSelector((state) => state.OTP);


    console.log("OTPCodeHere", OTPCodeHere);


    const [mobileNumber, setMobileNumber] = useState(route.params.notificationDataParam);

    const navigation = useNavigation();
    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            // navigation.dispatch(
            //   CommonActions.reset({
            //     index: 1,
            //     routes: [
            //       { name: 'HomeTab' },
            //     ]
            //   })
            // )
            console.log("Clear")
        }
    }

    const [inputContactState, setInputContactState] = useState('');
    const onChangeContact = (val) => {
        setInputContactState(val);
    }

    // const validateField = () => {
    //     if (firstOTP.length != 4) {
    //         alert('Please enter valid 4 digits OTP');
    //         return false
    //     }
    //     else {
    //         handleNavigate("HomeScreen");
    //         return true
    //     }
    // }

    const onPressSubmitCode = async () => {
        // validateField();
        dispatch(OTPCodeAction(valuesObj));
        dispatch(clearState());
        // handleNavigate("HomeScreen");
    }

    useEffect(() => {
        if (OTPCodeHere.success) {
            handleNavigate("HomeScreen");
            dispatch(clearState());
        }
        if (OTPCodeHere.message) {
            Toast.show({
                type: 'success',
                text1: `${OTPCodeHere.message}`,
                visibilityTime: 3000,
                position: 'top',
            });
        }
    }, [OTPCodeHere]);


    return (
        <ImageBackground
            source={{ uri: "mainsplash" }}
            style={{ flex: 1 }}
            resizeMode={"stretch"}>

            <Toast />
            {OTPCodeHere?.isLoading && <Loader></Loader>}
            <View style={{ flex: 3.5 }}>
            </View>

            <View style={{ marginBottom: hp('1.5'), marginHorizontal: wp('5') }}>

                <Text style={{ color: colors.white }}>
                    {`Enter the 4-digit OTP sent to ${route.params.contactNumberParam}`}
                </Text>

            </View>

            <View style={{ height: hp('20'), flexDirection: 'column', backgroundColor: 'white', marginHorizontal: wp('5'), borderRadius: wp('5') }}>

                <View style={{ paddingTop: wp('2'), height: hp('7'), justifyContent: 'flex-end', paddingTop: hp('2'), paddingHorizontal: wp('5') }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", justifyContent: 'center', marginHorizontal: wp('5') }}>
                        <View style={{ borderBottomColor: colors.grey, borderBottomWidth: wp('0.5'), }}>
                            <TextInput keyboardType={"numeric"} maxLength={4}
                                onChangeText={onChangeFirstOTP}
                                returnKeyType="next"
                                style={{
                                    marginHorizontal: wp('5'), fontSize: hp('1.75'), fontFamily: fontFamily.regular, height: hp('5')
                                }}
                            />
                        </View>

                    </View>

                </View>

                <View style={{ height: hp('8'), justifyContent: "flex-end", marginHorizontal: wp('5') }}>

                    <Button
                        onPress={onPressSubmitCode}
                        height={hp('4.5')} borderRadius={wp('1.5')}
                        text="Submit Code"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />

                </View>
            </View>

            <View style={{ flex: 0.5, marginVertical: hp('3'), marginHorizontal: wp('5') }}>

                <Text style={{ color: colors.white, fontFamily: fontFamily.regular, fontSize: hp('1.5') }}>
                    Didn't receive the code? Tap here to <Text style={{ fontSize: hp('1.55'), fontWeight: 'bold', textDecorationLine: "underline" }}>Resend</Text>. {"\n"}Having trouble with the authentication? {"\n"}
                    Raise a support request ticket.
                </Text>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 10, },
    title: { textAlign: 'center', fontSize: 20 },
    codeFieldRoot: { marginTop: 10 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 14,
        borderWidth: 2,
        borderColor: colors.borderColor,
        textAlign: 'center',
        // paddingTop: hp('0.35'),
    },
    focusCell: {
        borderColor: colors.fbColor,
    },


});
export default OTPEnter;