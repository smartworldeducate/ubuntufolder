import React, { useState } from 'react';
import { SafeAreaView, ScrollView, RefreshControl, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';

const DrawerHeader = ({ leftText, rightImg, onPressRightImg }) => {

    return (
        <View style={styles.mainView}>

            <View style={styles.leftView}>
                <Text style={styles.leftText}>{leftText}</Text>
            </View>

            <View style={{ flex: 0.5 }}>
            </View>

            <TouchableOpacity
                onPress={onPressRightImg}
                style={styles.rightImgView}>
                <Image
                    source={{ uri: rightImg }}
                    style={styles.imageStyle}
                    resizeMode={"contain"}
                />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        height: hp('8')
    },
    leftView: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    leftText: {
        fontSize: hp('2.75'),
        fontFamily: fontFamily.semiBold,
        color: colors.appColor
    },
    rightImgView: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "flex-end",
        alignItems: "center"
    },
    imageStyle: {
        height: hp('2.5'),
        width: wp('5')
    },
});

export default DrawerHeader;