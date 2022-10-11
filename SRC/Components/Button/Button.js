import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import fontFamily from "../../Styles/fontFamily";

const Button = ({ disabled, onPress, borderRadius, bgColor, borderColor, borderWidth, height, width,
    text, textColor, textSize, textMargin, textWeight
}) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ borderRadius: borderRadius, justifyContent: "center", alignItems: "center", height: height, width: width, backgroundColor: bgColor, flexDirection: "row", borderColor: borderColor, borderWidth: borderWidth }}>
            {/* <LinearGradient
                colors={['#296cb1', '#2760a7', '#203d88']}
                style={{}}> */}

            <Text style={{
                color: textColor, fontSize: textSize, fontFamily: fontFamily.regular,
                margin: textMargin, fontWeight: textWeight
            }}>
                {text}
            </Text>
            {/* </LinearGradient> */}

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    // linearGradient: {
    //     flex: 1
    // },
});
export default Button;