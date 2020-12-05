import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MockedData } from '_data';
import { viewStyles } from '_styles';
import TopHeadlinesCell from './TopHeadlinesCell';

const TopHeadlinesList = () => (
  <FlatList
    style={styles.listContainer}
    data={MockedData.TopHeadlines}
    showsVerticalScrollIndicator={false}
    keyExtractor={(_, index) => index.toString()}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    renderItem={({ item }) => <TopHeadlinesCell item={item} onPress={() => {}} />}
  />
);

const styles = StyleSheet.create({
  listContainer: { marginHorizontal: 32 },
  separator: viewStyles.listSeparator,
});

export default TopHeadlinesList;
