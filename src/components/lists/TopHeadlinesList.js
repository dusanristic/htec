import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { viewStyles } from '_styles';
import TopHeadlinesCell from './TopHeadlinesCell';

const TopHeadlinesList = ({ data }) => (
  <FlatList
    style={styles.listContainer}
    data={data}
    showsVerticalScrollIndicator={false}
    keyExtractor={(_, index) => index.toString()}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    renderItem={({ item }) => <TopHeadlinesCell item={item} onPress={() => {}} />}
  />
);

const styles = StyleSheet.create({
  listContainer: { marginHorizontal: 32 },
  separator: viewStyles.listSeparator
});

export default TopHeadlinesList;
