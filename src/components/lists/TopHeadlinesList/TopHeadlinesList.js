import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { viewStyles } from '_styles';
import TopHeadlinesCell from './TopHeadlinesCell';

const TopHeadlinesList = ({ data, onPress }) => (
  <FlatList
    style={styles.listContainer}
    data={data}
    showsVerticalScrollIndicator={false}
    keyExtractor={(_, index) => index.toString()}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    renderItem={({ item, index }) => (
      <TopHeadlinesCell item={item} onPress={() => onPress(index)} />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: { marginHorizontal: 32 },
  separator: viewStyles.topHeadlineslistSeparator
});

export default TopHeadlinesList;
