import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import colors from '../../Styles/colors';
import fontFamily from "../../Styles/fontFamily";


const ViewReportModal = ({ modalVisible, onPressModal, text1, text2 }) => {

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={null}
        >
            <View style={styles.modalView}>


                <TouchableOpacity onPress={onPressModal} style={{ flex: 0.25 }}>
                </TouchableOpacity>

                <View style={styles.modalCentralView}>
                    <View style={styles.modalCentralUpper}>

                        <Text style={styles.sentToText}>{text1}</Text>
                        <ScrollView>
                            <Text style={styles.lowerText}>{text2}</Text>
                        </ScrollView>
                    </View>

                    <View style={styles.modalCentralLower}>
                        <Text onPress={onPressModal} style={styles.centralLowerText}>Ok</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={onPressModal} style={{ flex: 0.25 }}>
                </TouchableOpacity>

            </View>
        </Modal >

    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: wp('3')
    },
    modalUpperView: {
        flex: 0.4
    },
    modalLowerView: {
        flex: 0.6,
        backgroundColor: colors.white,
    },
    modalCentralView: {
        flex: 0.5,
        flexDirection: 'column',
        paddingHorizontal: wp('6'),
        paddingTop: wp('6'),
        backgroundColor: colors.white,
        marginHorizontal: wp(6),

        borderRadius: wp('3'),
        borderColor: colors.white,
        borderWidth: wp('0.15'),

        elevation: wp('0.15'),
        shadowColor: '#000',
        shadowOffset: { width: wp('1'), height: hp('2') },

        // shadowOpacity: 0.25,

    },
    modalCentralUpper: {
        flex: 0.85
    },

    sentToText: {
        fontSize: hp('1.95'),
        fontFamily: fontFamily.semiBold,
        color: colors.lightBlack,
        paddingVertical: hp('1')
    },
    lowerText: {
        fontSize: hp('1.65'),
        fontFamily: fontFamily.regular,
        color: colors.lightBlack,
        paddingVertical: hp('1.5')
    },
    modalCentralLower: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    centralLowerText: {
        color: colors.appColor,
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regular
    }
});
export default ViewReportModal;