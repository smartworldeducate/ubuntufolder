import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../Components/Button/Button';
import LeftRightImgText from '../../Components/LeftRightImgText/LeftRightImgText';
import LineSeprator from '../../Components/LineSeprator/LineSeprator';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';


const Step1 = ({ step1Text, onPressStep1Btn }) => {

    return (
        <View style={{}}>
            <LeftRightImgText
                leftText={"Parent Profile"}
                rightText={"Edit"}
                img={"rightarrow"}
                marginHorizontal={wp('5')}
            />

            <LineSeprator
                style={styles.lineSeprator}
            />

            <Text style={styles.text1Style}>{step1Text}</Text>

            <View style={{ marginVertical: hp('3'), marginHorizontal: wp('5') }}>
                <Button
                    onPress={onPressStep1Btn}
                    height={hp('4.5')}
                    borderRadius={wp('1.5')}
                    text="Next"
                    bgColor={colors.appColor}
                    textColor={colors.white}
                    textSize={hp('1.75')}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    lineSeprator: {
        height: hp('0.2'),
        backgroundColor: colors.appColor,
        marginTop: hp('1'),
        marginBottom: hp('2'),
        marginHorizontal: wp('5')
    },
    text1Style: {
        fontSize: hp('1.85'),
        fontFamily: fontFamily.regular,
        lineHeight: hp('2.5'),
        color: colors.lightBlack,
        textAlign: "justify",
        marginHorizontal: wp('5')
    }
});
export default Step1;