import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';


const WithdrawlCentral = ({ text1, text2 }) => {

    return (
        <View style={{}}>
            <View style={{ height: hp('6'), width: wp('12'), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.appDarkColor, borderRadius: wp('1.5') }}>
                <Text style={{ color: colors.white, fontFamily: fontFamily.regular, fontSize: hp('1.5') }}>{text1}</Text>
            </View>
            <View style={{ marginVertical: hp('1.5'), justifyContent: 'center', alignItems: "center" }}>
                <Text style={{ color: colors.appDarkColor, fontFamily: fontFamily.semiBold, fontSize: hp('1.85') }}>{text2}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

});
export default WithdrawlCentral;