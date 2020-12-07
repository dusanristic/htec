import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LanguagesCell from './LanguagesCell';

const LanguagesList = ({ data, onPress, selectedLanguage }) => (
  <View style={{ ...styles.container }}>
    <FlatList
      horizontal
      bounces={false}
      contentContainerStyle={styles.content}
      style={styles.listContainer}
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <LanguagesCell
          item={item}
          onPress={() => onPress(item)}
          isSelected={selectedLanguage.id === index}
        />
      )}
    />
  </View>
);

LanguagesList.propTypes = {
  selectedLanguage: PropTypes.shape({
    id: PropTypes.number,
    country: PropTypes.string,
    iso: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-start' },
  listContainer: { marginHorizontal: 32, marginBottom: 8 },
  content: { flexGrow: 1, justifyContent: 'flex-end' }
});

export default LanguagesList;
