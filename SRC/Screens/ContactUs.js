import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import fontFamily from '../Styles/fontFamily';
import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';
import Button from '../Components/Button/Button';
import TextInputCustom from '../Components/TextInput/TextInput';
import FlatListItem from '../Components/FlatList/FlatList';
import LineSeprator from '../Components/LineSeprator/LineSeprator';


const ContactUs = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [inputContactState, setInputContactState] = useState('');
    const [selectedRec, setSelectedRec] = useState('');

    const [recommendations, setRecommendations] = useState([
        { id: 1, recName: "Suggestion", byDefault: true },
        { id: 2, recName: "Complaint", byDefault: false },
    ]);

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onPressDropDown = () => {
        setModalVisible(!modalVisible)
    }

    const onPressModal = () => {
        setModalVisible(!modalVisible);
    }

    const onChangeContact = (val) => {
        setInputContactState(val);
    }

    const onPressSelected = (val) => {
        setSelectedRec(val.recName);
        setModalVisible(!modalVisible);
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => onPressSelected(item)} style={{ flexDirection: 'row', marginHorizontal: wp('3') }}>
                    <View style={{ flex: 0.85, justifyContent: 'center' }}>
                        <Text style={styles.modalText}>{item.recName}</Text>
                    </View>
                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'flex-end', marginVertical: hp('2') }}>
                        <Image
                            source={{ uri: "addlocation" }}
                            style={{ height: hp('2'), width: wp('4') }}
                            resizeMode={"contain"}
                        />
                    </View>
                </TouchableOpacity>

                <LineSeprator style={styles.lineSeprator} />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightBlack }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white }} >
                <StatusBar barStyle={'light-content'} backgroundColor={colors.lightBlack} />

                <MainHeader
                    onPressRightImg={() => navigation.goBack()}
                    topLeftImg={"menu"}
                    text={"Contact Us"}
                    stuName={"Azaan Ali"}
                    stuNumber={"170838"}
                    campName={"Canal side Campus"}
                    className={"Class 3 - Red"}
                    stuImage={"student"}
                    stuStatus={"On-Roll"}
                />


                <TouchableOpacity onPress={onPressDropDown} style={{ flexDirection: 'row', height: hp('6'), marginHorizontal: wp('6'), borderColor: colors.grey, borderWidth: wp('0.15'), borderRadius: wp('3'), marginTop: hp('7') }}>


                    <View style={{ flex: 0.85, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: hp('2'), fontSize: hp('1.75'), fontFamily: fontFamily.regularAlatsi, color: colors.appColor }}>{selectedRec.length > 0 ? selectedRec : 'Suggestion'}</Text>
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >

                        <View style={styles.modalMainView}>
                            <TouchableOpacity onPress={onPressModal} style={{ flex: 0.4 }}></TouchableOpacity>
                            <View style={styles.modalView}>
                                <FlatListItem
                                    data={recommendations}
                                    renderItem={renderItem}
                                />

                            </View>
                            <TouchableOpacity onPress={onPressModal} style={{ flex: 0.45 }}></TouchableOpacity>
                        </View>

                    </Modal>

                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={{ uri: "arrowdown" }}
                            style={{ height: hp('2'), width: wp('4') }}
                            resizeMode={"contain"}
                        />
                    </View>

                </TouchableOpacity>

                <View style={{ height: hp('20'), marginHorizontal: wp('6'), borderColor: colors.grey, borderWidth: wp('0.15'), borderRadius: wp('3'), marginTop: hp('3') }}>
                    <TextInputCustom
                        value={inputContactState}
                        onChangeText={onChangeContact}
                        keyboardType={"default"}
                        placeholder={"Remarks"}
                        placeholderColor={colors.appColor}
                        textColor={colors.appColor}
                        multiline={true}
                        returnKeyType={"go"}
                        style={styles.textInputCustomStyle}
                    />
                </View>

                <View style={{ alignItems: "center", marginVertical: hp('3') }}>
                    <Button
                        height={hp('4.5')}
                        width={wp('25')}
                        borderRadius={wp('1.5')}
                        text="Submit"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.55')}
                        textWeight={"bold"}
                    />
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    modalMainView: {
        flex: 1,
        flexDirection: 'column',
        margin: hp('5'),
        justifyContent: "center",

    },
    modalView: {
        flex: 0.15,
        justifyContent: "center",

        backgroundColor: "white",
        padding: hp('1'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    textInputCustomStyle: {
        margin: wp('3'),
        fontSize: hp('1.65'),
        fontFamily: fontFamily.regular,
        color: colors.appColor,
        // fontWeight:"bold"
        // backgroundColor:"red"
    },
    modalText: {
        color: colors.lightBlack,
        fontFamily: fontFamily.regular,
        fontSize: hp('1.65')

    },
    lineSeprator: {
        height: hp('0.05'),
        backgroundColor: colors.grey,
        marginLeft: wp('5'),

    },
});
export default ContactUs;