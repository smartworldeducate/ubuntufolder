import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

import { getUniqueId, getManufacturer } from 'react-native-device-info';

import colors from '../Styles/colors';
import fontFamily from "../Styles/fontFamily";
import Button from '../Components/Button/Button';
import TextInputCustom from '../Components/TextInput/TextInput';

import { useDispatch, useSelector } from 'react-redux';
import { createPost } from "../Redux/Features/PhoneNumberSignUp/PhoneNumberSignUp";


const MobileNumperEnter = () => {
    const dispatch = useDispatch();
    const phoneNumberHere = useSelector((state) => state.phoneNumber);

    const [inputContactState, setInputContactState] = useState('');
    const [values, setValues] = useState({ sms_number: "" });
    const [deviceType, setDeviceType] = useState("android");
    const [deviceIdentifier, setDeviceIdentifier] = useState("asdf");
    const [deviceToken, setDeviceToken] = useState("asdf");


    const navigation = useNavigation();
    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onChangeContact = (val) => {
        setInputContactState(val);
        setValues({ ...values, sms_number: val });
    }

    const onPressSendCode = () => {
        
        dispatch(createPost(inputContactState.toString()));
        // dispatch(createPost(values.sms_number.toString()));
        handleNavigate("OTPEnter", false, { deviceTypeParam: deviceType, contactNumberParam: inputContactState, deviceIdentifierParam: deviceIdentifier, deviceTokenParam: deviceToken });
    }

    useEffect(() => {
        // device info
        const appName = DeviceInfo.getApplicationName();
        // console.log("appName", appName);

        const type = DeviceInfo.getDeviceType();
        // console.log("type", type);
        // setDeviceType(type);

        DeviceInfo.getDeviceToken().then((deviceToken) => {
            // console.log("deviceToken", deviceToken);
            // setDeviceToken(deviceToken);
        });

        const deviceId = DeviceInfo.getDeviceId();
        // console.log("deviceId", deviceId);
        // setDeviceIdentifier(deviceId);
        
        console.log("adder", 2+2);

    }, [inputContactState, deviceType, deviceIdentifier, deviceToken])

    return (
        <ImageBackground
            source={{ uri: "mainsplash" }}
            style={{ flex: 1 }}
            resizeMode={"stretch"}>

            <View style={styles.mainTopView}>
            </View>

            <View style={styles.contactNumberMainView}>
                <View style={styles.contactTextInputView}>

                    <TextInputCustom
                        value={values.sms_number}
                        onChangeText={onChangeContact}
                        keyboardType={"numeric"}
                        maxLength={11}
                        placeholder={"Phone Number"}
                        placeholderColor={colors.grey}
                        textColor={colors.fbColor}
                        returnKeyType={"go"}

                        style={styles.textInputCustomStyle}
                    />

                </View>

                <View style={styles.textView}>
                    <Text style={styles.textStyle}>
                        Enter your registered mobile number
                    </Text>
                </View>

                <View style={styles.textView}>

                    <Button
                        onPress={onPressSendCode}
                        height={hp('4.5')}
                        borderRadius={wp('1.5')}
                        text="Send Code"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />

                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    mainTopView: {
        flex: 4
    },

    textInputCustomStyle: {
        marginHorizontal: wp('5'),
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regular,
        height: hp('5'),
        borderBottomColor: colors.grey,
        borderBottomWidth: wp('0.5')
    },
    contactNumberMainView: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginBottom: hp('5'),
        marginHorizontal: wp('5'),
        borderRadius: wp('5')
    },
    contactTextInputView: {
        paddingTop: hp('2'),
    },
    textView: {
        justifyContent: 'center',
        marginHorizontal: wp('5'),
        marginVertical: hp('1')
    },
    textStyle: {
        fontSize: hp('1.4'),
        fontFamily: fontFamily.regular,
        color: colors.fbColor
    }
});
export default MobileNumperEnter;