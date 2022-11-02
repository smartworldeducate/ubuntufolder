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
                    style={{ flex: 0.8, backgroundColor: colors.transparentBlack }}>

                </TouchableOpacity>

                <View style={{ flex: 0.2, backgroundColor: colors.white, paddingHorizontal: wp('5'), paddingVertical: hp('1'), justifyContent: "center" }}>
                    <View style={{ height: hp('5'), justifyContent: "center", marginVertical: hp('0.25') }}>
                        <Text style={{ color: colors.grey }}>Photo</Text>
                    </View>
                    <TouchableOpacity onPress={onPressPhotos} style={{ height: hp('5'), justifyContent: "center", marginVertical: hp('0.25') }}>
                        <Text style={{ color: colors.lightBlack }}>From Photos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressCamera} style={{ height: hp('5'), justifyContent: "center", marginVertical: hp('0.25') }}>
                        <Text style={{ color: colors.lightBlack }}>Take Picture</Text>
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
    }
});
export default ImagePickerCrop;