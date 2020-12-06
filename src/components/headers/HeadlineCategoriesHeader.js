import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { viewStyles, textStyles, constants } from '_styles';

const HeadlineCategoriesHeader = ({ text, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={constants.activeOpacity}
    onPress={onPress}>
    <Text style={styles.title}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: viewStyles.categoriesHeader,
  title: textStyles.categoriesHeader
});

export default HeadlineCategoriesHeader;
