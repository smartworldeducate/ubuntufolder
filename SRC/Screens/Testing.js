
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { State } from 'react-native-gesture-handler';
import {
  BallIndicator,BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,
} from 'react-native-indicators';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from '../Components/Header/MainHeader';
import FlatListItem from '../Components/FlatList/FlatList';
import LineSeprator from '../Components/LineSeprator/LineSeprator';

import colors from '../Styles/colors';
import { useNavigation } from '@react-navigation/native';


import { getPosts } from "../Redux/Features/AllPost";
import fontFamily from '../Styles/fontFamily';

const Testing = () => {

  const navigation = useNavigation();

  // const posts = useSelector((state) => ({ ...state.post }));
  const posts = useSelector((state) => state.post);
  const isLoading = useSelector((state) => state.post.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // console.log("allPosts", posts.posts.map((post) => {
  //   return post.title
  // }));

  // console.log("postsLoading", posts.isLoading);

  // console.log("adder", 5 + 5);

  console.log("postsHere", posts);

  console.log("isLoading", isLoading);

  console.log("isLoadingHere", posts.isLoading);


  const renderItem = ({ item, index }) => {
    // console.log("item", item);

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: hp('1.75'), fontFamily: fontFamily.boldItalic, color: colors.lightBlack, textAlign: "center" }}>{item.title}</Text>
      </View>
    );
  }


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === "android" ? colors.white : colors.white }}>
      <StatusBar barStyle={'default'} backgroundColor={colors.lightBlack} />

      <MainHeader
        onPressRightImg={() => navigation.openDrawer()}
        topLeftImg={"menu"}
        text={"Student Profile"}
        stuName={"Azaan Ali"}
        stuNumber={"170838"}
        campName={"Canal side Campus"}
        className={"Class 3 - Red"}
        stuImage={"assesment"}
        stuStatus={"On-Roll"}
      />


      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        {
          isLoading ?

            <>
              {/* <ActivityIndicator size="large" color={colors.appColor} /> */}
              <DotIndicator color={colors.appColor} size={10} />
            </>
            :
            <View style={{ margin: hp('5') }}>
              <FlatListItem
                data={posts.posts}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={<LineSeprator style={styles.listSeprator} />}
              />
            </View>
        }


      </View>

    </SafeAreaView>
  );
};

export default Testing;

const styles = StyleSheet.create({
  listSeprator: {
    height: hp('0.08'),
    backgroundColor: colors.grey,
    marginHorizontal: wp('8'),
    marginVertical: hp('0.85')
  },
});
