import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { viewStyles, textStyles, constants } from '_styles';

const ClickableText = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} activeOpacity={constants.activeOpacity} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: viewStyles.clickableTextContainer,
  text: textStyles.categoriesHeader
});

export default ClickableText;
