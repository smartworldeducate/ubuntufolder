import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


const ListEmptyComponent = ({ img, styleImg, style, text }) => {

    return (
        <View>
            <View style={styles.viewStyle}>
                <Image
                    source={{ uri: img }}
                    style={styleImg}
                    resizeMode={"contain"}
                />
            </View>
            <Text style={style}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default ListEmptyComponent;