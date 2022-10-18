import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextInputCustom = ({
    style, onChange, onChangeText, placeholder,
    Value, placeholderColor, maxLength,
    keyboardType, multiline, onPressIn, autoFocus,
    onFocus, editable, secureTextEntry, returnKeyType
}) => {
    return (
        <TextInput
            style={style}
            onChangeText={onChangeText}
            onChange={onChange}
            placeholder={placeholder}
            value={Value}
            placeholderTextColor={placeholderColor}
            maxLength={maxLength}
            keyboardType={keyboardType}
            multiline={multiline}
            onPressIn={onPressIn}
            autoFocus={autoFocus}
            onFocus={onFocus}
            editable={editable}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
        />
    );
}

const styles = StyleSheet.create({
});
export default TextInputCustom;