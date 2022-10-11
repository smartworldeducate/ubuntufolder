import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';

import { CodeField, Cursor, useBlurOnFulfill, isLastFilledCell, MaskSymbol, useClearByFocusCell } from 'react-native-confirmation-code-field';

import OTPInputView from '@twotalltotems/react-native-otp-input'


import colors from '../Styles/colors';
import fontFamily from "../Styles/fontFamily";
import Button from '../Components/Button/Button';


const CELL_COUNT = 4;

const OTPEnter = ({ route }) => {

    console.log("routeParamsMobile", route.params.contactNumberParam);


    const [firstOTP, setFirstOTP] = useState();
    const [secondOTP, setSecondOTP] = useState();
    const [thirdOTP, setThirdOTP] = useState();
    const [fourthOTP, setFourthOTP] = useState();

    const [mobileNumber, setMobileNumber] = useState(route.params.notificationDataParam);

    const onChangeFirstOTP = (val) => {
        setFirstOTP(val);
    }

    const onChangeSecondOTP = (val) => {
        setSecondOTP(val);
    }

    const onChangeThirdOTP = (val) => {
        setThirdOTP(val);
    }


    const onChangeFourthOTP = (val) => {
        setFourthOTP(val);
    }

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

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const [isAllFilled, setIsAllFiilled] = useState(false);

    const renderCell = ({ index, symbol, isFocused }) => {
        let textChild = null;

        if (symbol) {
            textChild = (
                <MaskSymbol
                    maskSymbol="●"
                    isLastFilledCell={
                        isLastFilledCell({ index, value }),
                        setIsAllFiilled(index === 3 ? true : false),
                        console.log("123", index === 3 ? true : false)
                    }
                >
                    {symbol}
                </MaskSymbol>
            );
        } else if (isFocused) {
            textChild = <Cursor />;
        }

        return (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
            </Text>
        );
    };


    return (
        <ImageBackground
            source={{ uri: "mainsplash" }}
            style={{ flex: 1 }}
            resizeMode={"cover"}>

            <View style={{ flex: 4 }}>
                {/* <View style={{ backgroundColor: 'pink', alignItems: 'flex-end' }}>
                    <Text style={{}}>
                        Enter your registered mobile number
                    </Text>
                </View> */}
            </View>

            <View style={{ marginBottom: hp('1.5'), marginHorizontal: wp('5') }}>

                <Text style={{ color: colors.white }}>
                    {`Enter the 4-digit OTP sent to ${route.params.contactNumberParam}`}
                </Text>

            </View>

            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', marginBottom: hp('1'), marginHorizontal: wp('5'), borderRadius: wp('5') }}>

                <View style={{ paddingHorizontal: wp('2'), height: hp('7'), justifyContent: 'center', paddingTop: hp('2'), paddingHorizontal: wp('5') }}>

                    {/* <View style={{ flexDirection: "row", justifyContent: "space-evenly", justifyContent: 'center', marginHorizontal: wp('5') }}>
                        <View style={{ flex: 0.2, borderBottomColor: colors.grey, borderBottomWidth: wp('0.5'), }}>
                            <TextInput keyboardType={"numeric"} maxLength={1}
                                returnKeyType="next"
                                style={{
                                    marginHorizontal: wp('5'), fontSize: hp('1.75'), fontFamily: fontFamily.regular, height: hp('5')
                                }}
                            />
                        </View>

                        <View style={{ flex: 0.05 }}>

                        </View>

                        <View style={{ flex: 0.2, borderBottomColor: colors.grey, borderBottomWidth: wp('0.5') }}>
                            <TextInput keyboardType={"numeric"} maxLength={1}
                                returnKeyType="next"
                                style={{
                                    marginHorizontal: wp('5'), fontSize: hp('1.75'), fontFamily: fontFamily.regular, height: hp('5')
                                }}
                            />
                        </View>

                        <View style={{ flex: 0.05 }}>

                        </View>

                        <View style={{ flex: 0.2, borderBottomColor: colors.grey, borderBottomWidth: wp('0.5') }}>
                            <TextInput keyboardType={"numeric"} maxLength={1}
                                returnKeyType="next"
                                style={{
                                    marginHorizontal: wp('5'), fontSize: hp('1.75'), fontFamily: fontFamily.regular, height: hp('5')
                                }}
                            />
                        </View>

                        <View style={{ flex: 0.05 }}>

                        </View>

                        <View style={{ flex: 0.2, borderBottomColor: colors.grey, borderBottomWidth: wp('0.5') }}>
                            <TextInput keyboardType={"numeric"} maxLength={1}
                                returnKeyType="next"
                                style={{
                                    marginHorizontal: wp('5'), fontSize: hp('1.75'), fontFamily: fontFamily.regular, height: hp('5')
                                }}
                            />
                        </View>
                    </View> */}


                    {/* <View style={{ paddingHorizontal: wp('5') }}> */}
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={renderCell}
                    />
                    {/* </View> */}


                    {/* <OTPInputView
                        style={{ width: '80%', height: 200 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code) => {
                            console.log(`Code is ${code}, you are good to go!`)
                        }}
                    /> */}
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end", marginHorizontal: wp('5'), marginBottom: hp('1.5') }}>

                    <Button onPress={() => handleNavigate("HomeScreen")}
                        height={hp('4.5')} borderRadius={wp('1.5')}
                        text="Submit Code"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />

                </View>
            </View>

            <View style={{ flex: 0.5, marginBottom: hp('3'), marginHorizontal: wp('5') }}>

                <Text style={{ color: colors.white, fontFamily: fontFamily.regular, fontSize: hp('1.5') }}>
                    Didn't receive the code? Tap here to <Text style={{ fontSize: hp('1.55'), fontWeight: 'bold', textDecorationLine: "underline" }}>Resend</Text>. {"\n"}Having trouble with the authentication? {"\n"}
                    Raise a support request ticket.
                </Text>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // borderStyleBase: {
    //     width: 30,
    //     height: 45
    // },

    // borderStyleHighLighted: {
    //     borderColor: "#03DAC6",
    // },

    // underlineStyleBase: {
    //     width: 30,
    //     height: 45,
    //     borderWidth: 0,
    //     borderBottomWidth: 1,
    // },

    // underlineStyleHighLighted: {
    //     borderColor: "#03DAC6",
    // },





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