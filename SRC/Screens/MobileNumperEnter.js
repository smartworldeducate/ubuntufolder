import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLinkProps, useNavigation, CommonActions } from '@react-navigation/native';


import colors from '../Styles/colors';
import fontFamily from "../Styles/fontFamily";
import Button from '../Components/Button/Button';
import TextInputCustom from '../Components/TextInput/TextInput';


const MobileNumperEnter = () => {


    const navigation = useNavigation();

    const [inputContactState, setInputContactState] = useState('');


    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onChangeContact = (val) => {
        setInputContactState(val);
    }

    const onPressSendCode = () => {
        handleNavigate("OTPEnter");
    }

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
                        value={inputContactState}
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
                        onPress={() => handleNavigate("OTPEnter", false, { contactNumberParam: inputContactState })}
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