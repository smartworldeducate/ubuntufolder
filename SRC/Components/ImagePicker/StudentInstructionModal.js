import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Styles/colors';
import fontFamily from "../../Styles/fontFamily";

const StudentInstructionModal = ({ modalVisible, onPressModal, onPressClose, onPressProceed }) => {

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
                    style={{ flex: 0.3 }}>

                </TouchableOpacity>

                <View style={styles.centralInstructedArea}>
                    <View style={styles.centralHeaderView}>
                        <Text style={styles.headerText}>Instructions for picture </Text>
                    </View>

                    <View style={styles.instructionsTextsView}>
                        <Text style={styles.textStyle}>1. Passport size picture with white background</Text>
                        <Text style={styles.textStyle}>2. High Resolution</Text>
                        <Text style={styles.textStyle}>This picture can only be updated once in an academic year.</Text>
                    </View>

                    <View style={styles.lowerButtonsView}>
                        <View style={styles.emptyButtonView}>
                        </View>
                        <TouchableOpacity onPress={onPressClose} style={styles.buttonStyle}>
                            <Text style={{ color: colors.appColor }}>CLOSE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressProceed} style={styles.buttonStyle}>
                            <Text style={{ color: colors.appColor }}>PROCEED</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={onPressModal}
                    style={{ flex: 0.3 }}>

                </TouchableOpacity>

            </View>
        </Modal >

    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.transparentBlack
    },
    centralInstructedArea: {
        flex: 0.4,
        backgroundColor: colors.white,
        marginHorizontal: wp('6'),
        paddingHorizontal: wp('5'),
        borderRadius: wp('3')
    },
    centralHeaderView: {
        flex: 0.2,
        marginVertical: hp('0.25')
    },
    headerText: {
        color: colors.grey,
        fontFamily: fontFamily.semiBold,
        fontSize: hp('2'),
        paddingVertical: hp('3')
    },
    instructionsTextsView: {
        flex: 0.65,
        marginVertical: hp('2.5')
    },
    textStyle: {
        color: colors.grey,
        fontFamily: fontFamily.regular,
        fontSize: hp('1.75'),
        lineHeight: hp('3')
    },
    lowerButtonsView: {
        flex: 0.15,
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    emptyButtonView: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default StudentInstructionModal;