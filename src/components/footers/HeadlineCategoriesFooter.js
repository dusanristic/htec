import React from 'react';
import { View, StyleSheet } from 'react-native';
import { viewStyles } from '_styles';
import { ClickableText } from '_components/core';

const HeadlineCategoriesFooter = ({ onPrevious, onNext, showPrevInd, showNextInd }) => (
  <View
    style={
      showNextInd
        ? showPrevInd
          ? styles.twoChildren
          : styles.onlyRightChild
        : styles.onlyLeftChild
    }>
    {showPrevInd && <ClickableText text="<" onPress={onPrevious} />}
    {showNextInd && <ClickableText text=">" onPress={onNext} />}
  </View>
);

const styles = StyleSheet.create({
  twoChildren: { ...viewStyles.categoriesFooter, justifyContent: 'space-between' },
  onlyRightChild: { ...viewStyles.categoriesFooter, justifyContent: 'flex-end' },
  onlyLeftChild: { ...viewStyles.categoriesFooter, justifyContent: 'flex-start' }
});

export default HeadlineCategoriesFooter;
