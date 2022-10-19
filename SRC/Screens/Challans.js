import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, Platform, RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';
import FlatListItem from '../Components/FlatList/FlatList';
import LineSeprator from '../Components/LineSeprator/LineSeprator';
import LeftRightImgText from '../Components/LeftRightImgText/LeftRightImgText';
import Button from '../Components/Button/Button';
import fontFamily from '../Styles/fontFamily';

const Challans = () => {

    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);

    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const [payableChallans, setPayablesChallans] = useState([
        { id: 1, challnaDate: 'Oct 2022 - Oct 2022', amount: '11,145' },
        { id: 2, challnaDate: 'Sep 2022 - Sep 2022', amount: '10,000' }
    ]);

    const [paidChallans, setPaidChallans] = useState([
        { id: 1, challnDate: 'Apr 2022 - Apr 2022', amount: '10,000', challnaDate: 'Apr 2022 - Apr 2022', paidDate: '20-Apr' },
        { id: 2, challnaDate: 'Mar 2022 - Mar 2022', amount: '8500', challnaDate: 'Mar 2022 - Mar 2022', paidDate: '20-Mar' },
        { id: 3, challnaDate: 'Feb 2022 - Feb 2022', amount: '8000', challnaDate: 'Feb 2022 - Feb 2022', paidDate: '20-Feb' }
    ])

    const onRefresh = () => {
        setRefreshing(true);
        // initialCall();
        console.log("add", 2 + 2);
        setRefreshing(false);
        // console.log("calling again", initialCall());
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={styles.challansMainView}>
                <LeftRightImgText
                    leftText={item.challnaDate}
                />
                <LineSeprator style={styles.listSeprator} />


                <View style={styles.challanUpperMainView}>
                    <View style={styles.challanUpperView}>
                        <Text style={styles.challanUpperText1}>{`Rs ${item.amount}/-`}</Text>
                        <Text style={styles.challanUpperText2}>{`Amount Payable`}</Text>
                    </View>
                    <View style={styles.challanUpperRightView}>
                        <Button
                            height={hp('4.5')}
                            width={wp('25')}
                            borderRadius={wp('1.5')}
                            text="View Challan"
                            bgColor={colors.appColor}
                            textColor={colors.white}
                            textSize={hp('1.3')}
                            textWeight={"bold"}
                        />
                    </View>
                </View>

                <LineSeprator style={styles.listSecondSeprator} />

                <View style={styles.challanUpperMainView}>
                    <View style={{ flex: 0.5, justifyContent: 'center' }}>
                        <Text style={styles.challanUpperText1}>{`Rs ${item.amount}/-`}</Text>
                        <Text style={styles.challanUpperText2}>{`Amount Payable`}</Text>
                    </View>
                    <View style={styles.challanLowerRightView}>
                        <Button
                            height={hp('4.5')}
                            width={wp('38')}
                            borderRadius={wp('1.5')}
                            text="Get Challan Via Email"
                            bgColor={colors.appColor}
                            textColor={colors.white}
                            textSize={hp('1.3')}
                            textWeight={"bold"}
                        />
                    </View>
                </View>

            </View>
        );
    }

    const renderItemPastChallan = ({ item, index }) => {
        return (
            <View style={styles.pastChallanMainView}>

                <View style={styles.pastChallanView}>
                    <View style={styles.pastChallanUpperView}>
                        <Text style={styles.pastChallanUpperText}>{`${item.paidDate}`}</Text>
                    </View>
                    <View style={styles.pastChallanLowerView}>
                        <Text style={styles.pastChallanLowerText1}>{`Rs ${item.amount}`}</Text>
                        <Text style={styles.pastChallanLowerText2}>{`${item.paidDate} - ${item.paidDate}`}</Text>
                        <Text style={styles.pastChallanLowerText2}>{`Paid on ${item.paidDate}`}</Text>
                    </View>
                </View>

                <LineSeprator style={styles.listSecondSeprator} />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.lightBlack }}>

            <StatusBar barStyle={'light-content'} backgroundColor={"#606060"} />

            <MainHeader
                onPressRightImg={() => navigation.goBack()}
                topLeftImg={"backarrow"}
                text={"Challans"}
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
                        tintColor={colors.white}

                    // title={"loading"}
                    // titleColor={colors.white}

                    // size between 0 to 1
                    // size={"large"}
                    />
                }
            >


                <View style={{ marginTop: hp('5') }}>
                    <FlatListItem
                        data={payableChallans}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>

                <View style={{ alignItems: 'center', marginVertical: hp('2') }}>
                    <Button
                        height={hp('4.5')}
                        width={wp('35')}
                        borderRadius={wp('1.5')}
                        text="Pay Online"
                        bgColor={colors.appColor}
                        textColor={colors.white}
                        textSize={hp('1.5')}
                        textWeight={"bold"}
                    />
                </View>

                <View style={{ marginTop: hp('2') }}>

                    <LeftRightImgText
                        leftText={"Past Challans"}
                        marginHorizontal={wp('8')}
                    />
                    <LineSeprator style={styles.listSepratorPast} />

                    <FlatListItem
                        data={paidChallans}
                        renderItem={renderItemPastChallan}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>

                <View style={{ marginBottom: hp('2') }}>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listSeprator: {
        height: hp('0.15'),
        backgroundColor: colors.appColor,
        marginVertical: hp('0.85')
    },
    listSecondSeprator: {
        height: hp('0.085'),
        backgroundColor: colors.grey,
        marginVertical: hp('0.85')
    },
    listSepratorPast: {
        height: hp('0.15'),
        backgroundColor: colors.appColor,
        marginVertical: hp('0.85'),
        marginHorizontal: wp('8')
    },
    challansMainView: {
        marginHorizontal: wp('8'),
        borderRadius: wp('4'),
        borderColor: colors.grey,
        borderWidth: wp('0.15'),
        paddingHorizontal: wp('2'),
        paddingVertical: hp('1.5'),
        marginBottom: hp('1')
    },
    challanUpperMainView: {
        flexDirection: 'row',
        paddingVertical: hp('0.5'),
        paddingHorizontal: wp('2')
    },
    challanUpperView: {
        flex: 0.6,
        justifyContent: 'center'
    },
    challanUpperText1: {
        fontFamily: fontFamily.semiBold,
        color: colors.lightBlack,
        fontSize: hp('1.7')
    },
    challanUpperText2: {
        fontFamily: fontFamily.regular,
        color: colors.grey,
        fontSize: hp('1.55')
    },
    challanUpperRightView: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    challanLowerRightView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    pastChallanMainView: {
        marginHorizontal: wp('8')
    },
    pastChallanView: {
        flexDirection: "row"
    },
    pastChallanUpperView: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: wp('4'),
        borderColor: colors.grey,
        borderWidth: wp('0.15'),
        height: hp('7'),
        width: wp('8'),
        paddingHorizontal: wp('1.5')
    },
    pastChallanUpperText: {
        fontFamily: fontFamily.semiBold,
        color: colors.lightBlack,
        fontSize: hp('1.5')
    },
    pastChallanLowerView: {
        flex: 0.85,
        justifyContent: 'center',
        paddingHorizontal: wp('3')
    },
    pastChallanLowerText1: {
        fontFamily: fontFamily.semiBold,
        color: colors.lightBlack,
        fontSize: hp('1.75')
    },
    pastChallanLowerText2: {
        fontFamily: fontFamily.regular,
        color: colors.lightBlack,
        fontSize: hp('1.5')
    }
});
export default Challans;