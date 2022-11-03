import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Styles/colors';
import fontFamily from "../../Styles/fontFamily";

const ImagePickerCrop = ({ modalVisible, onPressModal, onPressPhotos, onPressCamera }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={null}
        >
            <View style={styles.modalView}>

                <TouchableOpacity
                    onPress={onPressModal}
                    style={styles.upperView}>

                </TouchableOpacity>

                <View style={styles.lowerView}>
                    <View style={styles.textView}>
                        <Text style={styles.upperTextColor}>Photo</Text>
                    </View>
                    <TouchableOpacity onPress={onPressPhotos} style={styles.textView}>
                        <Text style={styles.lowerTextColor}>From Photos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressCamera} style={styles.textView}>
                        <Text style={styles.lowerTextColor}>Take Picture</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: 'column'
    },
    upperView: {
        flex: 0.75,
        backgroundColor: colors.transparentBlack
    },
    lowerView: {
        flex: 0.25,
        backgroundColor: colors.white,
        paddingHorizontal: wp('5'),
        justifyContent: "center"
    },
    textView: {
        height: hp('6.5'),
        justifyContent: "center"
    },
    upperTextColor: {
        color: colors.grey,
        fontSize: hp('2'),
        fontFamily: fontFamily.regularAlatsi
    },
    lowerTextColor: {
        color: colors.lightBlack,
        fontSize: hp('2'),
        fontFamily: fontFamily.regularAlatsi
    }

});
export default ImagePickerCrop;