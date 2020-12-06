import React from 'react';
import { FlatList } from 'react-native';
import HeadlineCategoryCell from './HeadlineCategoryCell';

const HeadlineCategoryList = ({ data }) => (
  <FlatList
    contentContainerStyle={{ flexGrow: 1 }}
    horizontal
    pagingEnabled
    bounces={false}
    showsHorizontalScrollIndicator={false}
    data={data}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item, index }) => (
      <HeadlineCategoryCell item={item} onPress={() => console.log(index)} />
    )}
  />
);
export default HeadlineCategoryList;
