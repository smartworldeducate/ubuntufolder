import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Modal, Platform, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import fontFamily from '../Styles/fontFamily';

import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';
import LeftRightImgText from '../Components/LeftRightImgText/LeftRightImgText';
import LineSeprator from '../Components/LineSeprator/LineSeprator';
import FlatListItem from '../Components/FlatList/FlatList';
import ModalNotification from '../Components/Modal/ModalNotification';

const ViewAllNotifications = ({ route }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    // console.log("routeParams", route.params.notificationDataParam);

    const [date, setDate] = useState();
    const [text, setText] = useState();
    const [type, setType] = useState();
    const [to, setTo] = useState();
    const [sentBy, setSentBy] = useState();
    const [details, setDetails] = useState();



    const [modalVisible, setModalVisible] = useState(false);
    const onPressModal = () => {
        setModalVisible(!modalVisible)
    }

    const navigation = useNavigation();

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        // initialCall();
        console.log("add", 2 + 2);
        setRefreshing(false);
        // console.log("calling again", initialCall());
    }

    const onPressRightImg = ({ item }) => {
        setDate(item.date);
        setText(item.text);
        setType(item.type);
        setTo(item.to);
        setSentBy(item.sentBy);
        setDetails(item.details);
        onPressModal();
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={styles.listMainView}>
                <View style={styles.listLeftView}>
                    <Text>{item.date}</Text>
                </View>
                <View style={styles.listCentralView}>
                    <Text style={styles.centalUpperText}>{item.text}</Text>
                    <Text style={styles.centalLowerText}>{item.type}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => onPressRightImg({ item })}
                    style={styles.listRightView}
                >
                    <Image
                        source={{ uri: "forwardarrow" }}
                        style={styles.listRightImg}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.white }}>
            <StatusBar barStyle={'default'} backgroundColor={"#606060"} />

            <MainHeader
                onPressRightImg={() => navigation.goBack()}
                topLeftImg={"menu"}
                text={"Notifications"}
                stuName={"Azaan Ali"}
                stuNumber={"170838"}
                campName={"Canal side Campus"}
                className={"Class 3 - Red"}
                stuImage={"student"}
                stuStatus={"On-Roll"}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white, marginVertical: hp(2) }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        // we can implement multiple colors in the form of array 
                        colors={[colors.fbColor, colors.paratGreen, colors.red]}
                        // background color of the refresh indicator
                        progressBackgroundColor={colors.silverGrey}
                        tintColor={colors.appColor}

                    // title={"loading"}
                    // titleColor={colors.white}

                    // size between 0 to 1
                    // size={"large"}
                    />
                }
            >


                <View style={styles.notificationView}>
                    <LeftRightImgText
                        leftText={"Notifications"}
                        marginHorizontal={wp('8')}
                    />
                </View>

                <LineSeprator style={styles.lineSeprator} />

                <FlatListItem
                    data={route.params.notificationDataParam}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={route.params.notificationDataParam.length}
                    ItemSeparatorComponent={<LineSeprator style={styles.listSeprator} />}
                />

                <View style={styles.bottomView}>
                </View>

                <ModalNotification
                    modalVisible={modalVisible}
                    onPressModal={onPressModal}
                    modalUpperFlex={0.4}
                    modalLowerFlex={0.6}
                    to={to}
                    details={details}
                    sentBy={sentBy}
                />

                <View style={{ marginBottom: hp('5') }}>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    notificationView: {
        marginTop: hp('3'),
        marginBottom: hp('1')
    },
    lineSeprator: {
        height: hp('0.2'),
        backgroundColor: colors.appColor,
        marginHorizontal: wp('8'),
        marginBottom: hp('2')
    },
    listSeprator: {
        height: hp('0.08'),
        backgroundColor: colors.grey,
        marginHorizontal: wp('8'),
        marginVertical: hp('0.85')
    },
    listMainView: {
        flexDirection: "row",
        marginHorizontal: wp('6'),
    },
    listLeftView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('6'),
        width: wp('6'),
        borderRadius: wp('3'),
        borderWidth: wp('0.15'),
        borderColor: colors.appColor
    },
    listCentralView: {
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: wp('3')
    },
    centalUpperText: {
        fontSize: hp('1.6'),
        fontFamily: fontFamily.regular,
        color: colors.grey,
        lineHeight: hp('2.5')
    },
    centalLowerText: {
        fontSize: hp('1.6'),
        fontFamily: fontFamily.regular,
        color: colors.lightBlack,
        lineHeight: hp('2.5')
    },
    listRightView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    listRightImg: {
        height: hp('1.25'),
        width: wp('2')
    },
    bottomView: {
        marginBottom: hp('1')
    }

});
export default ViewAllNotifications;