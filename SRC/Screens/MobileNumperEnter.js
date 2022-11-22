// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, ImageBackground } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';
// import DeviceInfo from 'react-native-device-info';

// // or ES6+ destructured imports

// import { getUniqueId, getManufacturer } from 'react-native-device-info';

// import colors from '../Styles/colors';
// import fontFamily from "../Styles/fontFamily";
// import Button from '../Components/Button/Button';
// import TextInputCustom from '../Components/TextInput/TextInput';

// import { useDispatch, useSelector } from 'react-redux';
// import { createPost } from "../Redux/Features/PhoneNumberSignUp/PhoneNumberSignUp";
// import Loader from '../Components/Loader/Loader';


// const MobileNumperEnter = () => {
//     const dispatch = useDispatch();
//     const phoneNumberHere = useSelector((state) => state.phoneNumber);

//     const [inputContactState, setInputContactState] = useState('');
//     const [values, setValues] = useState({ sms_number: "" });
//     const [deviceType, setDeviceType] = useState("android");
//     const [deviceIdentifier, setDeviceIdentifier] = useState("asdf");
//     const [deviceToken, setDeviceToken] = useState("asdf");

//     const [buttonState, setButtonState] = useState(true);

//     const [alertValue, setAlertValue] = useState(false);
//     const [loader, setLoader] = useState(false);

//     const [successValue, setSuccessValue] = useState(null);


//     const navigation = useNavigation();
//     const handleNavigate = (routeName, clearStack, params) => {
//         navigation.navigate(routeName, params);
//         if (clearStack) {
//             console.log("Clear")
//         }
//     }

//     const onChangeContact = (val) => {
//         setInputContactState(val);
//         setValues({ ...values, sms_number: val });
//         // setButtonState(inputContactState.length >= 11 ? true : false);
//     }

//     useEffect(() => {

//         const type = DeviceInfo.getDeviceType();
//         // console.log("type", type);
//         // setDeviceType(type);

//         DeviceInfo.getDeviceToken().then((deviceToken) => {
//             // console.log("deviceToken", deviceToken);
//             // setDeviceToken(deviceToken);
//         });

//         const deviceId = DeviceInfo.getDeviceId();
//         // console.log("deviceId", deviceId);
//         // setDeviceIdentifier(deviceId);

//     }, [inputContactState, deviceType, deviceIdentifier, deviceToken, values])

//     console.log("phoneNumberHere", phoneNumberHere);

//     const onPressSendCode = () => {

//         dispatch(createPost(inputContactState.toString()));

//         console.log("phoneNumberHere", phoneNumberHere);
//         console.log("successValueHere", phoneNumberHere.posts.success);

//         setSuccessValue(phoneNumberHere.posts.success);

//         if (phoneNumberHere.posts.success == 1) {
//             handleNavigate("OTPEnter", false, { deviceTypeParam: deviceType, contactNumberParam: inputContactState, deviceIdentifierParam: deviceIdentifier, deviceTokenParam: deviceToken });
//             setAlertValue(false);
//         }
//         else {
//             setAlertValue(true);
//         }
//     }

//     return (
//         <ImageBackground
//             source={{ uri: "mainsplash" }}
//             style={{ flex: 1 }}
//             resizeMode={"stretch"}>
//             {
//                 alertValue ?
//                     <View style={{ marginTop: hp('2'), height: hp('9'), backgroundColor: "#404040", marginHorizontal: hp('2'), justifyContent: "center", alignItems: 'center', borderRadius: wp('2'), }}>
//                         <Text style={{ color: colors.white, fontSize: hp('2'), fontFamily: fontFamily.regular, paddingHorizontal: wp('2'), paddingVertical: hp('0.5'), textAlign: "center" }}>{"Please enter a valid mobile number or contact the respective school PRO."}</Text>
//                     </View>
//                     :
//                     null
//             }
//             {
//                 loader ?
//                     <Loader /> :
//                     <>
//                         <View style={styles.mainTopView}>
//                         </View>
//                         <View style={styles.contactNumberMainView}>
//                             <View style={styles.contactTextInputView}>

//                                 <TextInputCustom
//                                     value={values.sms_number}
//                                     onChangeText={onChangeContact}
//                                     keyboardType={"numeric"}
//                                     maxLength={11}
//                                     placeholder={"Phone Number"}
//                                     placeholderColor={colors.grey}
//                                     textColor={colors.fbColor}
//                                     returnKeyType={"go"}

//                                     style={styles.textInputCustomStyle}
//                                 />
//                             </View>

//                             <View style={styles.textView}>
//                                 <Text style={styles.textStyle}>
//                                     Enter your registered mobile number
//                                 </Text>
//                             </View>

//                             <View style={styles.textView}>
//                                 <Button
//                                     // disabled={buttonState}
//                                     onPress={onPressSendCode}
//                                     height={hp('4.5')}
//                                     borderRadius={wp('1.5')}
//                                     text="Send Code"
//                                     bgColor={colors.appColor}
//                                     textColor={colors.white}
//                                     textSize={hp('1.75')}
//                                 />
//                             </View>
//                         </View>
//                     </>
//             }

//         </ImageBackground>
//     );
// }

// const styles = StyleSheet.create({
//     mainTopView: {
//         flex: 4
//     },

//     textInputCustomStyle: {
//         marginHorizontal: wp('5'),
//         fontSize: hp('1.75'),
//         fontFamily: fontFamily.regular,
//         height: hp('5'),
//         borderBottomColor: colors.grey,
//         borderBottomWidth: wp('0.5')
//     },
//     contactNumberMainView: {
//         // flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'white',
//         marginBottom: hp('5'),
//         marginHorizontal: wp('5'),
//         borderRadius: wp('5')
//     },
//     contactTextInputView: {
//         paddingTop: hp('2'),
//     },
//     textView: {
//         justifyContent: 'center',
//         marginHorizontal: wp('5'),
//         marginVertical: hp('1')
//     },
//     textStyle: {
//         fontSize: hp('1.4'),
//         fontFamily: fontFamily.regular,
//         color: colors.fbColor
//     }
// });
// export default MobileNumperEnter;














import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../Styles/colors';
import fontFamily from '../Styles/fontFamily';
import Button from '../Components/Button/Button';
import TextInputCustom from '../Components/TextInput/TextInput';

import { useDispatch, useSelector } from 'react-redux';
import { clearState, createPost } from '../Redux/Features/PhoneNumberSignUp/PhoneNumberSignUp';
import Toast from 'react-native-toast-message';
import Loader from '../Components/Loader/Loader';


const MobileNumperEnter = () => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.post);
    const [inputContactState, setInputContactState] = useState('');
    const [values, setValues] = useState({ sms_number: '' });
    const [deviceType, setDeviceType] = useState('android');
    const [deviceIdentifier, setDeviceIdentifier] = useState('asdf');
    const [deviceToken, setDeviceToken] = useState('asdf');

    const navigation = useNavigation();
    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log('Clear');
        }
    };

    const onChangeContact = val => {
        setInputContactState(val);
        setValues({ ...values, sms_number: val });
    };

    const validateField = () => {
        if (inputContactState.length != 11) {
            //   alert('Please enter 11 digits number');
            return false;
        } else {
            return true;
        }
    };

    const onPressSendCode = () => {
        validateField();
        dispatch(createPost(inputContactState.toString()));
        dispatch(clearState());
    };
    useEffect(() => {
        if (post.success) {
            //   AsyncStorage.setItem('number', inputContactState);
            handleNavigate('OTPEnter', false, {
                deviceTypeParam: deviceType,
                contactNumberParam: inputContactState,
                deviceIdentifierParam: deviceIdentifier,
                deviceTokenParam: deviceToken,
            });

            dispatch(clearState());
        }
        if (post.message) {
            Toast.show({
                type: 'success',
                text1: `${post.message}`,
                visibilityTime: 3000,
                fontSize: hp('3'),
                fontFamily: fontFamily.regular,
                position: 'top',
            });
        }
    }, [post]);

    console.log("post", post);
    return (
        <ImageBackground
            source={{ uri: 'mainsplash' }}
            style={{ flex: 1 }}
            resizeMode={'stretch'}>
            <Toast />
            {post?.isLoading && <Loader></Loader>}
            <View style={styles.mainTopView}></View>
            <View style={styles.contactNumberMainView}>
                <View style={styles.contactTextInputView}>
                    <TextInputCustom
                        value={values.sms_number}
                        onChangeText={onChangeContact}
                        keyboardType={'numeric'}
                        maxLength={11}
                        placeholder={'Phone Number'}
                        placeholderColor={colors.grey}
                        textColor={colors.fbColor}
                        returnKeyType={'go'}
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
                        // disabled={buttonState}
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
};

const styles = StyleSheet.create({
    mainTopView: {
        flex: 4,
    },

    textInputCustomStyle: {
        marginHorizontal: wp('5'),
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regular,
        height: hp('5'),
        borderBottomColor: colors.grey,
        borderBottomWidth: wp('0.5'),
    },
    contactNumberMainView: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginBottom: hp('5'),
        marginHorizontal: wp('5'),
        borderRadius: wp('5'),
    },
    contactTextInputView: {
        paddingTop: hp('2'),
    },
    textView: {
        justifyContent: 'center',
        marginHorizontal: wp('5'),
        marginVertical: hp('1'),
    },
    textStyle: {
        fontSize: hp('1.4'),
        fontFamily: fontFamily.regular,
        color: colors.fbColor,
    },
});
export default MobileNumperEnter;