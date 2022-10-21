import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button/Button';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import WithDrawlReasonsModal from '../../Components/Modal/WithDrawlReasonsModal';
import TextInputCustom from '../../Components/TextInput/TextInput';


const Step3 = ({ onPressBack, onPressNext }) => {

    const navigation = useNavigation();
    const [selectReason, setSelectReason] = useState('');
    const [withdrawReasonModal, setWithdrawReasonModal] = useState(false)
    const [reasons, setReasons] = useState([
        { id: 1, reason: "I am dissatified with the management of school" },
        { id: 2, reason: "I am dissatified with the academic progress of my child" },
        { id: 3, reason: "Our family is moving abroad" },
        { id: 4, reason: "Our family is moving another city with no BSS school" },
        { id: 5, reason: "I am facing conveyance issues in picking and dropping my child" },
        { id: 6, reason: "I feel the school fee is too high" },
        { id: 7, reason: "I am moving to my child to an Islamic School" },

        { id: 8, reason: "Our family is moving abroad" },
        { id: 9, reason: "Our family is moving another city with no BSS school" },
        { id: 10, reason: "I am facing conveyance issues in picking and dropping my child" },
        { id: 11, reason: "I feel the school fee is too high" },
        { id: 12, reason: "I am moving to my child to an Islamic School" },
    ]);

    const [inputFeedback, setInputFeedback] = useState('');

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onPressWithdrawlReasonModal = () => {
        setWithdrawReasonModal(!withdrawReasonModal);
    }

    const onPressSelectedWithdrawlReasonModal = ({ item }) => {
        console.log("itemReason", item);
        setSelectReason(item.reason);
        setWithdrawReasonModal(!withdrawReasonModal);
    }

    const onChangeFeedback = (val) => {
        setInputFeedback(val);
    }

    const renderItemWithdrawlReasons = ({ item, index }) => {
        console.log("withdrawlReasons", item);


        return (
            <TouchableOpacity onPress={() => onPressSelectedWithdrawlReasonModal({ item })} style={styles.renderMainView}>
                <View style={{ flex: 0.85, justifyContent: "center" }}>
                    <Text style={{ fontSize: hp('2.15'), textAlign: "left", fontFamily: fontFamily.regular, color: colors.lightBlack, lineHeight: hp('3') }}>{item.reason}</Text>
                </View>

                <View style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={{ uri: "forwardarrow" }}
                        style={styles.listRightImg}
                        resizeMode={"contain"}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{}}>

            <TouchableOpacity onPress={onPressWithdrawlReasonModal} style={styles.mainTouchableOpacity}>

                <View style={{ flex: 0.85, justifyContent: 'center' }}>
                    <Text style={{ marginLeft: hp('2'), fontSize: hp('1.75'), fontFamily: fontFamily.regularAlatsi, color: colors.appColor }}>{selectReason.length > 0 ? selectReason : 'Please Select Reason for withdrawl'}</Text>
                </View>

                <WithDrawlReasonsModal
                    modalUpperFlex={0.3}
                    modalLowerFlex={0.7}
                    modalVisible={withdrawReasonModal}
                    onPressModal={onPressWithdrawlReasonModal}
                    flatlistData={reasons}
                    flatlistRenderItem={renderItemWithdrawlReasons}
                    keyExtractor={(item, index) => index.toString()}
                />

                <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{ uri: "forwardarrow" }}
                        style={{ height: hp('2'), width: wp('4') }}
                        resizeMode={"contain"}
                    />
                </View>

            </TouchableOpacity>

            {
                selectReason.length > 0 &&

                <View style={{ height: hp('20'), marginHorizontal: wp('6'), borderColor: colors.grey, borderWidth: wp('0.15'), borderRadius: wp('3'), marginTop: hp('3') }}>
                    <TextInputCustom
                        value={inputFeedback}
                        onChangeText={onChangeFeedback}
                        keyboardType={"default"}
                        placeholder={"Is there any feedback you would like to share about your experience?"}
                        placeholderColor={colors.appColor}
                        textColor={colors.appColor}
                        multiline={true}
                        returnKeyType={"go"}
                        style={styles.textInputCustomStyle}
                    />

                </View>

            }

            <View style={{ flexDirection: "row", marginVertical: hp('3'), marginHorizontal: wp('5') }}>
                <View style={{ flex: 0.47 }}>
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
                <View style={{ flex: 0.04 }}></View>
                <View style={{ flex: 0.47 }}>
                    <Button
                        onPress={onPressNext}
                        height={hp('4.5')}
                        borderRadius={wp('1.5')}
                        text="Next"

                        textColor={colors.white}
                        textSize={hp('1.75')}
                        disabled={selectReason.length > 0 ? false : true}
                        bgColor={selectReason.length > 0 ? colors.appColor : colors.grey}
                    />
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainTouchableOpacity: {
        flexDirection: 'row',
        height: hp('6'),
        marginHorizontal: wp('6'),
        borderColor: colors.grey,
        borderWidth: wp('0.15'),
        borderRadius: wp('3'),
        marginTop: hp('0')
    },

    renderMainView: {
        flexDirection: "row",
        marginHorizontal: wp('4'),
        marginTop: hp('1'),
        justifyContent: "center",
        marginBottom: hp('1'),

        borderRadius: wp('2'),
        backgroundColor: "white",
        padding: hp('2'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    listRightImg: {
        height: hp('2'),
        width: wp('4')
    },

    textInputCustomStyle: {
        paddingLeft: wp('4'),
        paddingVertical: hp('1'),
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regular,
        color: colors.appColor,
    },

});
export default Step3;