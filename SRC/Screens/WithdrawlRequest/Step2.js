import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/Button/Button';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import FlatListItem from '../../Components/FlatList/FlatList';
import LineSeprator from '../../Components/LineSeprator/LineSeprator';


const Step2 = ({ onPressBack, onPressNext, disabled }) => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectRelation, setSelectRelation] = useState('');
    const [relations, setRelations] = useState([
        { id: 1, relationName: "Father", byDefault: true },
        { id: 2, relationName: "Mother", byDefault: false },
    ]);

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onPressModal = () => {
        setModalVisible(!modalVisible);
    }

    const onPressSelected = ({ item }) => {

        console.log("itemRelation", item);
        setSelectRelation(item.relationName);
        setModalVisible(!modalVisible);
        console.log("selectRelation", selectRelation);
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

    return (
        <View style={{}}>

            <TouchableOpacity onPress={onPressModal} style={styles.mainView}>

                <View style={styles.selectValueLeftView}>
                    <Text style={styles.selectValueText}>{'Relationship with student'}</Text>
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

                <View style={{ flex: 0.25, justifyContent: "center"}}>
                    <Text style={{ textAlign: "center", color:colors.appColor }}>{selectRelation.length > 0 ? selectRelation : 'Select'}</Text>
                </View>

                <View style={styles.selectValueRightView}>
                    <Image
                        source={{ uri: "arrowdown" }}
                        style={{ height: hp('2'), width: wp('4') }}
                        resizeMode={"contain"}
                    />
                </View>

            </TouchableOpacity>


            <View style={styles.btnMainView}>
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
                        disabled={selectRelation.length > 0 ? false : true}
                        // bgColor={selectRelation.length > 0 ? colors.appColor : colors.grey}
                        bgColor={selectRelation.length > 0 ? colors.appColor : colors.grey}
                    />
                </View>

            </View>

        </View>
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
        marginTop: hp('0')
    },

    selectValueLeftView: {
        flex: 0.6,
        justifyContent: 'center'
    },
    selectValueText: {
        marginLeft: hp('2'),
        fontSize: hp('1.75'),
        fontFamily: fontFamily.regularAlatsi,
        color: colors.appColor
    },

    selectValueRightView: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnMainView: {
        flexDirection: "row",
        marginVertical: hp('3'),
        marginHorizontal: wp('5')
    },

    lineSeprator: {
        height: hp('0.1'),
        backgroundColor: colors.grey,
        marginTop: hp('1'),
        marginBottom: hp('1'),
        marginLeft: wp('5')
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
    modalText: {
        color: colors.lightBlack,
        fontFamily: fontFamily.regular,
        fontSize: hp('1.8')

    },
});
export default Step2;