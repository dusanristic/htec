import React from 'react';
import { View, StyleSheet } from 'react-native';
import { viewStyles } from '_styles';
import { ClickableText } from '_components/core';

const HeadlineCategoriesFooter = ({ onPrevious, onNext, showFirst, showSecond }) => (
  <View
    style={
      showSecond ? (showFirst ? styles.twoChildren : styles.onlyRightChild) : styles.onlyLeftChild
    }>
    {showFirst && <ClickableText text="<" onPress={onPrevious} />}
    {showSecond && <ClickableText text=">" onPress={onNext} />}
  </View>
);

const styles = StyleSheet.create({
  twoChildren: { ...viewStyles.categoriesFooter, justifyContent: 'space-between' },
  onlyRightChild: { ...viewStyles.categoriesFooter, justifyContent: 'flex-end' },
  onlyLeftChild: { ...viewStyles.categoriesFooter, justifyContent: 'flex-start' }
});

export default HeadlineCategoriesFooter;
