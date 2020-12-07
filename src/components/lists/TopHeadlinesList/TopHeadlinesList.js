import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { viewStyles } from '_styles';
import { ActivityIndicator } from '_components/core';
import TopHeadlinesCell from './TopHeadlinesCell';

const TopHeadlinesList = ({ data, onPress, onEndReached, onRefresh, isFetching }) => (
  <FlatList
    refreshing={isFetching}
    style={styles.listContainer}
    data={data}
    keyExtractor={(_, index) => index.toString()}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    renderItem={({ item, index }) => (
      <TopHeadlinesCell item={item} onPress={() => onPress(index)} />
    )}
    onEndReached={onEndReached}
    onEndReachedThreshold={0.5}
    onRefresh={onRefresh}
    ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
  />
);

const styles = StyleSheet.create({
  listContainer: { marginHorizontal: 32 },
  separator: viewStyles.topHeadlineslistSeparator
});

export default TopHeadlinesList;
