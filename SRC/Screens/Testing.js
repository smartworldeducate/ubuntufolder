
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import colors from '../Styles/colors';

const Testing = () => {

  const [defaultImg, setDefaultImg] = useState("signupuser");

  const onPressCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setDefaultImg(image.path);
    })
  }


  const onPressPhotoLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setDefaultImg(image.path);
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={{ justifyContent: "center", alignItems: "center", height: hp('25'), width: wp('50') }}>
        <Image
          source={{ uri: defaultImg }}
          style={{ height: hp('23'), width: wp('47'), borderRadius: wp('25') }}
          resizeMode={"contain"}
        />
      </View>

      <TouchableOpacity onPress={onPressCamera} style={{ marginVertical: hp('1'), backgroundColor: colors.appColor, height: hp('6'), width: wp('70'), justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: colors.white }}>Take from Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressPhotoLibrary} style={{ marginVertical: hp('1'), backgroundColor: colors.grey, height: hp('6'), width: wp('70'), justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: colors.white }}>Choose from Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({

});
