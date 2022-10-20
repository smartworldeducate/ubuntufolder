import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button/Button';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import WithDrawlReasonsModal from '../../Components/Modal/WithDrawlReasonsModal';


const Step4 = ({ onPressBack, onPressNext }) => {

    const navigation = useNavigation();


    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    return (

        <>
            <View style={{ marginHorizontal: wp('4') }}>
                <Text style={{ marginHorizontal: wp('3'), fontFamily: fontFamily.regular, fontSize: hp('1.95'), color: colors.lightBlack, textAlign: "justify", lineHeight: hp('2.5') }}>{"After development, you should add test for your modification and make all tests passed to prevent other contributors break the feature in the future accidentally. We use detox + jest for e2e test now, you can read Detox for more detail."}</Text>
            </View>

            <View style={{ flexDirection: "row", marginVertical: hp('3'), marginHorizontal: wp('5') }}>
                <View style={{ flex: 0.4 }}>
                    <Button
                        onPress={onPressBack}
                        height={hp('4.5')}
                        borderRadius={wp('1.5')}
                        text="Back"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />
                </View>
                <View style={{ flex: 0.05 }}></View>
                <View style={{ flex: 0.55 }}>
                    <Button
                        onPress={onPressNext}
                        height={hp('4.5')}
                        borderRadius={wp('1.5')}
                        text="Submit Application"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />
                </View>

            </View>
        </>


    );
}

const styles = StyleSheet.create({

});
export default Step4;