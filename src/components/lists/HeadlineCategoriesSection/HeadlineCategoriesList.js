import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, LayoutAnimation, StyleSheet } from 'react-native';
import { animations, viewStyles } from '_styles';
import { HeadlineCategoriesFooter } from '_components/footers';
import HeadlineCategoryCell from './HeadlineCategoriesCell';

const HeadlinesCategoryList = ({ data, onPress, shouldExpand }) => {
  const [isExpanded, setIsExpanded] = useState(shouldExpand);
  const [currentIndex, setCurrentIndex] = useState(0);

  const listRef = useRef();

  useEffect(() => {
    /*
     * Default value of shouldExpand prop is undefined.
     * Do not change isExpanded state value on first render.
     */
    if (shouldExpand !== undefined) {
      LayoutAnimation.configureNext(animations.changeHeight);
      setIsExpanded(!isExpanded);
    }
  }, [shouldExpand]);

  const changeArticle = ({ showNext }) => {
    const increment = showNext ? 1 : -1;
    listRef.current.scrollToIndex({ index: currentIndex + increment });
    setCurrentIndex(currentIndex + increment);
  };

  return (
    <View style={isExpanded ? styles.expandedList : styles.collapsedList}>
      <FlatList
        scrollEnabled={false}
        ref={listRef}
        contentContainerStyle={styles.container}
        style={styles.separator}
        horizontal
        pagingEnabled
        pinchGestureEnabled={false}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <HeadlineCategoryCell item={item} onPress={() => onPress(index)} />
        )}
      />
      <HeadlineCategoriesFooter
        showFirst={currentIndex !== 0}
        showSecond={currentIndex !== data.length - 1}
        onNext={() => changeArticle({ showNext: true })}
        onPrevious={() => changeArticle({ showNext: false })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  contentContainer: { justifyContent: 'flex-end', flex: 1 },
  expandedList: { height: 'auto' },
  collapsedList: { height: 0 },
  separator: viewStyles.categoriesSeparator
});

export default HeadlinesCategoryList;
