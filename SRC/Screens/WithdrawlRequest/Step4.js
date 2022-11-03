import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button/Button';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import FlatListItem from '../../Components/FlatList/FlatList';
import LineSeprator from '../../Components/LineSeprator/LineSeprator';
import ImagePickerCrop from '../../Components/ImagePicker/ImagePickerCrop';


const Step4 = ({ onPressBack, onPressNext }) => {

    const navigation = useNavigation();

    const [idCardFront, setIdCardFront] = useState("idcard");
    const [idCardBack, setIdCardBack] = useState("idcard");
    const [frontModalValue, setFrontModalValue] = useState(false);
    const [backModalValue, setBackModalValue] = useState(false);


    const [modalVisible, setModalVisible] = useState(false);
    const [selectRelation, setSelectRelation] = useState('');
    const [relations, setRelations] = useState([
        { id: 1, relationName: "Father", byDefault: false, parentName: "Qasim Ali Khan", CNIC: "35401-1234567-1", email: "QasimAliKhan@gmail.com", contact: "0300-1234567", correspondanceAdress: "Gulberg 3 gurumangat road lahore" },
        { id: 2, relationName: "Mother", byDefault: false, parentName: "Ayesha khan", CNIC: "35401-1234567-2", email: "Ayeshakhan@gmail.com", contact: "0301-1234567", correspondanceAdress: "Gulberg 3 gurumangat road lahore" },
    ]);

    const [parentName, setParentName] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const [checkbox, setCheckbox] = useState(false);


    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onPressModal = () => {
        setModalVisible(!modalVisible);
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => onPressSelected({ item })} style={{ flexDirection: 'row', marginHorizontal: wp('3') }}>
                    <View style={{ flex: 0.85, justifyContent: 'center' }}>
                        <Text style={styles.modalText}>{item.relationName}</Text>
                    </View>
                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'flex-end', marginVertical: hp('2') }}>
                        <Image
                            source={{ uri: "circleselect" }}
                            style={{ height: hp('2'), width: wp('4') }}
                            resizeMode={"contain"}
                        />
                    </View>
                </TouchableOpacity>

                <LineSeprator style={styles.lineSeprator} />

            </View>
        );
    }

    const onPressSelected = ({ item }) => {
        setSelectRelation(item.relationName);
        setParentName(item.parentName);
        setCNIC(item.CNIC);
        setEmail(item.email);
        setContact(item.contact);
        setAddress(item.correspondanceAdress);
        setModalVisible(!modalVisible);
    }

    const onPressCheckbox = () => {
        setCheckbox(!checkbox);
    }

    const onPressFrontIdCardModal = () => {
        setFrontModalValue(!frontModalValue);
    }

    const onPressFrontPhotoLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setIdCardFront(image.path);
            setFrontModalValue(false);
        })
    }

    const onPressFrontCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setIdCardFront(image.path);
            setFrontModalValue(false);
        })
    }


    const onPressBackIdCardModal = () => {
        setBackModalValue(!backModalValue);
    }

    const onPressBackPhotoLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setIdCardBack(image.path);
            setBackModalValue(false);
        })
    }

    const onPressBackCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setIdCardBack(image.path);
            setBackModalValue(false);
        })
    }

    return (

        <>
            <View style={{ marginHorizontal: wp('4'), marginBottom: hp('2') }}>
                <Text style={{ marginHorizontal: wp('3'), fontFamily: fontFamily.regular, fontSize: hp('1.95'), color: colors.lightBlack, textAlign: "justify", lineHeight: hp('2.5') }}>{"After development, you should add test for your modification and make all tests passed to prevent other contributors break the feature in the future accidentally. We use detox + jest for e2e test now, you can read Detox for more detail."}</Text>
            </View>



            <TouchableOpacity onPress={onPressModal} style={styles.mainView}>

                <View style={styles.selectValueLeftView}>
                    <Text style={styles.selectValueText}>{'Cheque Beneficiary'}</Text>
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
                                data={relations}
                                renderItem={renderItem}
                            />


                        </View>
                        <TouchableOpacity onPress={onPressModal} style={{ flex: 0.4 }}></TouchableOpacity>
                    </View>

                </Modal>

                <View style={styles.selectRelationImgView}>
                    <Text style={styles.selectRelationText}>{selectRelation.length > 0 ? selectRelation : 'Select'}</Text>
                </View>

                <View style={styles.selectValueRightView}>
                    <Image
                        source={{ uri: "arrowdown" }}
                        style={{ height: hp('2'), width: wp('4') }}
                        resizeMode={"contain"}
                    />
                </View>

            </TouchableOpacity>



            {
                selectRelation.length > 0 &&

                <View style={styles.parentDetailsView}>
                    <View style={styles.selectedRelationUpperView}>
                        <Text style={styles.selectedRelationHeaderText}>{parentName}</Text>
                    </View>

                    <View style={styles.selectedRelationLowerView}>
                        <Text style={styles.selectedRelatioDetailsText}>CNIC: <Text style={{ fontWeight: "normal" }}>{CNIC}</Text></Text>
                        <Text style={styles.selectedRelatioDetailsText}>Email: <Text style={{ fontWeight: "normal" }}>{email}</Text></Text>
                        <Text style={styles.selectedRelatioDetailsText}>Contact Number: <Text style={{ fontWeight: "normal" }}>{contact}</Text></Text>
                        <Text style={styles.selectedRelatioDetailsText}>Correspondance Address: <Text style={{ fontWeight: "normal" }}>{address}</Text></Text>
                    </View>

                </View>
            }

            <View style={{ flexDirection: "row", marginVertical: hp('2') }}>
                <View style={{ flex: 0.1, justifyContent: "center" }}></View>
                <TouchableOpacity onPress={onPressFrontIdCardModal} style={{ flex: 0.35, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={{ uri: idCardFront }}
                        style={styles.imageStyle}
                        resizeMode={"stretch"}
                    />
                </TouchableOpacity>

                <View style={{ flex: 0.1, justifyContent: "center" }}></View>

                <TouchableOpacity onPress={onPressBackIdCardModal} style={{ flex: 0.35, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={{ uri: idCardBack }}
                        style={styles.imageStyle}
                        resizeMode={"stretch"}
                    />
                </TouchableOpacity>
                <View style={{ flex: 0.1, justifyContent: "center" }}></View>
            </View>


            <View style={{ marginHorizontal: wp('4'), marginBottom: hp('2') }}>
                <Text style={{ marginHorizontal: wp('3'), fontFamily: fontFamily.regular, fontSize: hp('1.75'), color: colors.grey, textAlign: "justify", lineHeight: hp('2.5') }}>{"Freeimage.host is a rocket fast free image hosting service. Upload image anonymously, Upload images to albums"}</Text>
            </View>



            <TouchableOpacity style={styles.mainView}>

                <View style={styles.selectValueLeftView}>
                    <Text style={styles.selectValueText}>{'Last day in school'}</Text>
                </View>

                <View style={{ flex: 0.4, justifyContent: "center" }}>
                    <Text style={styles.selectRelationText}>{`21-Oct-2022`}</Text>
                </View>

                <View style={{}}>
                </View>

            </TouchableOpacity>


            <View style={{ flexDirection: "row", marginHorizontal: wp('4'), marginTop: hp('2') }}>
                <TouchableOpacity onPress={onPressCheckbox} style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={{ uri: checkbox ? "checked" : "uncheck" }}
                        style={{ height: hp('3'), width: wp('6') }}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>
                <View style={{ flex: 0.8, justifyContent: "center" }}>
                    <Text style={{ marginHorizontal: wp('3'), fontFamily: fontFamily.regular, fontSize: hp('1.95'), color: colors.lightBlack, textAlign: "justify", lineHeight: hp('2.5') }}>{"After development, you should add test for your modification and make all tests passed to prevent other contributors break the feature in the future accidentally. We use detox + jest for e2e test now, you can read Detox for more detail."}</Text>
                </View>
            </View>




            <View style={{ flexDirection: "row", marginVertical: hp('3'), marginHorizontal: wp('5') }}>
                <View style={{ flex: 0.4 }}>
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
                <View style={{ flex: 0.05 }}></View>
                <View style={{ flex: 0.55 }}>
                    <Button
                        onPress={onPressNext}
                        height={hp('4.5')}
                        borderRadius={wp('1.5')}
                        text="Submit Application"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.75')}
                    />
                </View>

            </View>

            <View style={{ marginBottom: hp('1.5') }}></View>


            <ImagePickerCrop
                modalVisible={frontModalValue}
                onPressModal={onPressFrontIdCardModal}
                onPressPhotos={onPressFrontPhotoLibrary}
                onPressCamera={onPressFrontCamera}
            />

            <ImagePickerCrop
                modalVisible={backModalValue}
                onPressModal={onPressBackIdCardModal}
                onPressPhotos={onPressBackPhotoLibrary}
                onPressCamera={onPressBackCamera}
            />
        </>


    );
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        height: hp('6'),
        marginHorizontal: wp('6'),
        borderColor: colors.grey,
        borderWidth: wp('0.15'),
        borderRadius: wp('3'),
    },

    selectValueLeftView: {
        flex: 0.6,
        justifyContent: 'center',
    },
    selectValueText: {
        marginLeft: hp('2'),
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regularAlatsi,
        color: colors.appColor
    },

    selectRelationImgView: {
        flex: 0.25,
        justifyContent: "center"
    },
    selectRelationText: {
        textAlign: "center",
        color: colors.appColor,
        fontSize: hp('1.6'),
        fontFamily: fontFamily.regularAlatsi
    },

    selectValueRightView: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalMainView: {
        flex: 1,
        flexDirection: 'column',
        margin: hp('5'),
        justifyContent: "center",

    },

    modalView: {
        flex: 0.2,
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

    lineSeprator: {
        height: hp('0.1'),
        backgroundColor: colors.grey,
        marginTop: hp('1'),
        marginBottom: hp('1'),
        marginLeft: wp('5')
    },

    parentDetailsView: {
        flexDirection: "column",
        marginHorizontal: wp('6'),
        marginVertical: hp('2'),
        backgroundColor: colors.white,

        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        borderRadius: wp('2')
    },
    selectedRelationUpperView: {
        paddingVertical: hp('2'),
        paddingHorizontal: wp('3'),
        backgroundColor: colors.grey,
        borderTopLeftRadius: wp('1'),
        borderTopRightRadius: wp('1')
    },
    selectedRelationHeaderText: {
        fontSize: hp('2'),
        fontFamily: fontFamily.regular,
        color: colors.silverGrey
    },
    selectedRelationLowerView: {
        marginTop: hp('1.5'),
        marginHorizontal: wp('3'),
        paddingBottom: hp('2')
    },
    selectedRelatioDetailsText: {
        fontSize: hp('2'),
        fontFamily: fontFamily.regular,
        color: colors.grey,
        fontWeight: "bold",
        lineHeight: hp('3.5')
    },

    imageStyle: {
        height: hp('8'),
        width: wp("20")
    },
});
export default Step4;