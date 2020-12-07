import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { viewStyles, textStyles, constants } from '_styles';

const LanguagesCell = ({ item, onPress, isSelected }) => (
  <TouchableOpacity
    activeOpacity={constants.activeOpacity}
    style={[styles.container, isSelected ? styles.selectedBackground : {}]}
    onPress={onPress}>
    <Text style={styles.text}>{item.title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  selectedBackground: { backgroundColor: 'gray' },
  container: viewStyles.languagesCell,
  text: textStyles.languagesCell
});

export default LanguagesCell;
