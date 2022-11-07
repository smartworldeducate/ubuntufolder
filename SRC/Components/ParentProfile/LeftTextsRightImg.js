import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';


const LeftTextsRightImg = ({ text1, text2, img, paddingHorizontal, onPressImg }) => {

    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.85, justifyContent: "center", paddingHorizontal: paddingHorizontal}}>
                <Text style={{ fontSize: hp('1.75'), fontFamily: fontFamily.semiBold, color: colors.lightBlack }}>{text1}</Text>
                <Text style={{ fontSize: hp('1.75'), fontFamily: fontFamily.regular, color: colors.grey }}>{text2}</Text>
            </View>
            <TouchableOpacity onPress={onPressImg} style={{ flex: 0.15, justifyContent: "center", alignItems: "flex-end" }}>
                <Image
                    source={{ uri: img }}
                    style={styles.imageStyle}
                    resizeMode={"contain"}
                />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: hp('3'),
        width: wp('6')
    }
});
export default LeftTextsRightImg;