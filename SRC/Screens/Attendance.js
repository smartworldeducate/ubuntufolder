import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';


import { useDispatch, useSelector } from 'react-redux';
import { calanderAction } from "../Redux/Features/CalanderKit/CalanderKit";
import FlatListItem from '../Components/FlatList/FlatList';


const Attendance = () => {

    const dispatch = useDispatch();
    const calanderHere = useSelector((state) => state.calander);


    const navigation = useNavigation();
    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear");
        }
    }

    const [calanderData, setCalanderData] = useState();

    useEffect(() => {
        dispatch(calanderAction("170838"));
        setCalanderData(calanderHere.posts.result);
        // console.log("calanderHereInsider", calanderHere);
    }, [calanderData])

    console.log("calanderHere", calanderHere.posts.result);
    // console.log("calanderData", calanderData.posts.result.attendance.map((e) => {
    //     return e.att_month
    // }));

    console.log("calanderData", calanderData);
   
    const renderItem = ({ item, index }) => {
        console.log("item", item);
        console.log("index", index);
        return (
            <Text>{item.data.att_date}</Text>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.white }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white }}>
                <StatusBar barStyle={'default'} backgroundColor={colors.lightBlack} />

                <MainHeader
                    onPressRightImg={() => navigation.goBack()}
                    topLeftImg={"backarrow"}
                    text={"Attendance"}
                    stuName={"Azaan Ali"}
                    stuNumber={"170838"}
                    campName={"Canal side Campus"}
                    className={"Class 3 - Red"}
                    stuImage={"student"}
                    stuStatus={"On-Roll"}
                />


                {/* calander work */}

                <View style={{ width: '100%', padding: 20 }}>


                    <Calendar
                        headerStyle={styles.calendarHeader}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: colors.appColor,
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: colors.white,
                            disabledArrowColor: '#d9e1e8',
                            monthTextColor: colors.white,
                            // indicatorColor: 'blue',
                            // textDayFontFamily: 'monospace',
                            // textMonthFontFamily: 'monospace',
                            // textDayHeaderFontFamily: 'monospace',
                            // textDayFontWeight: '300',
                            // textMonthFontWeight: 'bold',
                            // textDayHeaderFontWeight: '300',
                            // textDayFontSize: 16,
                            // textMonthFontSize: 16,
                            // textDayHeaderFontSize: 16
                        }}


                        markingType={'custom'}
                        markedDates={<FlatListItem
                            data={calanderData}
                            renderItem={renderItem}
                        />}


                    // markedDates={
                    //     calanderData.map((item) => {
                    //         markedDay[item.date] = {
                    //             selected: true,
                    //             marked: true,
                    //             selectedColor: "purple",
                    //         }
                    //     }
                    //     )
                    // {
                    //     '2022-11-11': {
                    //         customStyles: {
                    //             container: {
                    //                 backgroundColor: 'green'
                    //             },
                    //             text: {
                    //                 color: 'black',
                    //                 fontWeight: 'bold'
                    //             }
                    //         }
                    //     },
                    //     '2022-11-12': {
                    //         customStyles: {
                    //             container: {
                    //                 backgroundColor: 'white',
                    //                 elevation: 2
                    //             },
                    //             text: {
                    //                 color: 'blue'
                    //             }
                    //         }
                    //     }
                    // }
                    // }
                    />


                    {/* <Calendar
                        style={styles.calendar}
                        headerStyle={styles.calendarHeader}
                        dayComponent={day => {
                            const arrNew = day?.accessibilityLabel.split(' ');
                            // console.log(day.date.day, 'dayday');
                            // const count = calendarEvents?.filter((item: any) => {
                            //   return item?.dateString === day?.date?.dateString;
                            // }).length;
                            return (
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={[
                                        styles.dayWrapper,
                                        {
                                            backgroundColor:
                                                day.date.day > 5 &&
                                                    day.date.day < 13 &&
                                                    !(arrNew[1] == 'Saturday' || arrNew[1] == 'Sunday')
                                                    ? 'lightgreen'
                                                    : 'white',
                                            borderRadius:
                                                day.date.day > 5 &&
                                                    day.date.day < 13 &&
                                                    !(arrNew[1] == 'Saturday' || arrNew[1] == 'Sunday')
                                                    ? 100
                                                    : 0,
                                        },
                                    ]}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color:
                                                arrNew[1] == 'Saturday' || arrNew[1] == 'Sunday'
                                                    ? 'blue'
                                                    : 'black',
                                        }}>
                                        {day.date && day.date.day}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                        markingType={'multi-dot'}
                        onMonthChange={date => {
                            // console.log(date, 'date');
                        }}
                        theme={{
                            textDayFontSize: 12,
                        }}
                    /> */}
                </View>
                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                    <View
                        style={{
                            height: 0.8,
                            backgroundColor: 'black',
                            width: '100%',
                            alignSelf: 'center',
                        }}></View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', padding: 20 }}>
                    <View style={{ width: '50%' }}>
                        <View style={styles.row}>
                            <View style={styles.box}></View>
                            <Text style={styles.textStyle}>Present Physically</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, { backgroundColor: "#8f211d" }]}></View>
                            <Text style={styles.textStyle}>Absent</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, { backgroundColor: "#2c71b3" }]}></View>
                            <Text style={styles.textStyle}>Exempted</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={styles.row}>
                            <View style={[styles.box, { backgroundColor: '#2f727e' }]}></View>
                            <Text style={styles.textStyle}>Present Online</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, { backgroundColor: '#e27538' }]}></View>
                            <Text style={styles.textStyle}>On Leave</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, { backgroundColor: '#8996a3' }]}></View>
                            <Text style={styles.textStyle}>Holidays</Text>
                        </View>
                    </View>
                </View>






            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    box: { height: 25, width: 25, backgroundColor: colors.lightGreen, borderRadius: 5 },
    textStyle: { marginLeft: 8, color: 'black' },
    calendarHeader: {
        backgroundColor: colors.appColor,
        borderRadius: 0,
    },
    dayWrapper: {
        height: 40,
        width: 40,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendar: {
        borderRadius: 8,
    },

});
export default Attendance;