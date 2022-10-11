import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import FlatListItem from '../Components/FlatList/FlatList';


import colors from '../Styles/colors';
import MainHeader from '../Components/Header/MainHeader';
import fontFamily from '../Styles/fontFamily';
import LineSeprator from '../Components/LineSeprator/LineSeprator';
import Button from '../Components/Button/Button';
import AssessmentReportModal from '../Components/Modal/AssessmentReportModal';


const Assessment = () => {

    const navigation = useNavigation();

    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [stdSection, setStdSection] = useState();
    const [campus, setCampus] = useState();
    const [modalVisible, setModalVisible] = useState(false);


    const handleNavigate = (routeName, clearStack, params) => {
        navigation.navigate(routeName, params);
        if (clearStack) {
            console.log("Clear")
        }
    }

    const [assessmentData, setAssessmentData] = useState([
        {
            id: 1, class: "Class 1", dateFrom: 'Aug, 19', dateTo: 'Jul, - 20', assessment: true, assessmentReport: {
                section: "Pink", campus: "Waltion Campus, Lahore"
            }
        },
        {
            id: 2, class: "Class 2", dateFrom: 'Aug, 20 ', dateTo: 'Jul, - 21', assessment: true, assessmentReport: {
                section: "Green", campus: "Waltion Campus, Lahore"
            }
        },

        { id: 3, class: "Class 3", dateFrom: 'Aug, 21', dateTo: ' Jul, - 22', assessment: false },
    ]);


    const [stdSubjectsResults, setStdSubjectsResults] = useState([
        { id: 1, subName: 'English', obtainMarks: 23, totalMarks: 50 },
        { id: 2, subName: 'General Science', obtainMarks: 26, totalMarks: 50 },
        { id: 3, subName: 'Islamiyat', obtainMarks: 46, totalMarks: 50 },
        { id: 4, subName: 'Mathematics', obtainMarks: 17, totalMarks: 50 },
        { id: 5, subName: 'urdu', obtainMarks: 33, totalMarks: 50 },
        { id: 6, subName: 'Music', obtainMarks: 46, totalMarks: 50 },
        { id: 7, subName: 'Visual Arts', obtainMarks: 17, totalMarks: 50 },
    ])

    const onPressModal = () => {
        setModalVisible(!modalVisible)
    }

    const onPressViewReport = ({ item }) => {
        setDateFrom(item.dateFrom);
        setDateTo(item.dateTo);
        setStdSection(item.assessmentReport.section);
        setCampus(item.assessmentReport.campus);
        onPressModal();
    }

    const renderSubjectsItem = ({ item, index }) => {
        console.log("item", item);
        return (
            <View style={styles.tableMainView}>
                <View style={styles.subViews}>
                    <Text style={styles.tableText}>{item.subName} </Text>
                </View>
                <View style={styles.subViews}>
                    <Text style={styles.tableText}>{`${item.obtainMarks} / ${item.totalMarks}`}</Text>
                </View>
                <TouchableOpacity style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.tableText}><Text style={{ fontFamily: fontFamily.semiBold }}>View</Text></Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={styles.renderMainView}>
                <View View style={styles.mainInnerView}>

                    <View style={styles.innerHeaderView}>
                        <Text style={styles.datesText}>{`${item.class} (${item.dateFrom} - ${item.dateTo})`}</Text>
                    </View>

                    {
                        item.assessment &&
                        <TouchableOpacity style={styles.imageView}>
                            <Image
                                source={{ uri: 'arrowdown' }}
                                style={styles.imageStyle}
                                resizeMode={"contain"}
                            />
                        </TouchableOpacity>
                    }

                </View>

                <LineSeprator style={styles.lineSeprator} />

                <View style={styles.bottomRowView}>

                    <View style={{ flex: item.assessment ? 0.65 : 1, justifyContent: 'center', paddingHorizontal: wp('1.5') }}>
                        <Text style={styles.sectionText}>{`${item.assessment ? `Section: ${item.assessmentReport.section}` : "No Assessment has been uploaded yet."}`}</Text>
                        <Text style={styles.campusText}>{`${item.assessment ? item.assessmentReport.campus : ''}`}</Text>
                    </View>

                    {
                        item.assessment &&
                        <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                onPress={() => onPressViewReport({ item })}
                                height={hp('3.5')}
                                width={wp('25')}
                                borderRadius={wp('1')}
                                text="View Report"
                                bgColor={colors.appColor}
                                textColor={colors.white}
                                textSize={hp('1.5')}
                            />
                        </View>
                    }

                    <AssessmentReportModal
                        modalVisible={modalVisible}
                        onPressModal={onPressModal}
                        reportQuatar={"Mid Year Report"}
                        assessmentYear={`${dateFrom} - ${dateTo}`}
                        stdClass={stdSection}
                        campus={campus}
                        termAttendence={`Term Attendence: 73 / 92`}

                        stdSubjectsResults={stdSubjectsResults}
                        renderSubjectsItem={renderSubjectsItem}
                    />

                </View>

            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#606060" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.white }}>
                <StatusBar barStyle={'light-content'} backgroundColor={"#606060"} />

                <MainHeader
                    onPressRightImg={() => navigation.goBack()}
                    topLeftImg={"backarrow"}
                    text={"Assessment"}
                    stuName={"Azaan Ali"}
                    stuNumber={"170838"}
                    campName={"Canal side Campus"}
                    className={"Class 3 - Red"}
                    stuImage={"student"}
                    stuStatus={"On-Roll"}
                />

                <View style={{ marginHorizontal: wp('8'), marginVertical: hp('2') }}>
                    <FlatListItem
                        data={assessmentData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: hp('2'),
        width: wp('4')
    },
    renderMainView: {
        flexDirection: 'column',
        borderColor: colors.appColor,
        borderWidth: wp('0.15'),
        borderRadius: wp('4'),
        marginVertical: hp('1'),
        paddingVertical: hp('1.5')
    },
    mainInnerView: {
        flexDirection: 'row',
        marginHorizontal: wp('2')
    },
    innerHeaderView: {
        flex: 0.85,
        justifyContent: 'center'
    },

    datesText: {
        fontFamily: fontFamily.semiBold,
        color: colors.appColor,
        fontSize: hp('1.65')
    },

    imageView: {
        flex: 0.15,
        alignItems: 'center'
    },
    bottomRowView: {
        flexDirection: 'row'
    },
    sectionText: {
        fontFamily: fontFamily.semiBold,
        color: colors.lightBlack,
        fontSize: hp('1.5'),
        lineHeight: hp('2.5')
    },
    campusText: {
        fontFamily: fontFamily.regular,
        color: colors.lightBlack,
        fontSize: hp('1.5'),
        lineHeight: hp('2.5')
    },

    lineSeprator: {
        height: hp('0.15'),
        backgroundColor: colors.appColor,
        marginHorizontal: wp('2'),
        marginVertical: hp('0.5')
    },
    tableMainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp('7'),
        borderColor: colors.appColor,
        borderWidth: wp('0.15'),
        justifyContent: "center",
        // paddingVertical: hp('0.5')

    },
    subViews: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: colors.appColor,
        borderRightWidth: wp('0.1')
    },
    tableText: {
        color: colors.appColor,
        fontFamily: fontFamily.regular,
        fontSize: hp('1.5'),
        lineHeight: hp('3.5')
    }
});
export default Assessment;