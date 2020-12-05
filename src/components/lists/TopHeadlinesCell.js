import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { viewStyles, textStyles, constants } from '_styles';

const TopHeadlinesCell = ({ item, onPress }) => (
  <TouchableOpacity activeOpacity={constants.activeOpacity} onPress={onPress}>
    <Text style={styles.title}>{item.title}</Text>
    <Image source={{ uri: item.urlToImage }} style={styles.image} resizeMode="cover" />
    <Text numberOfLines={constants.linesOfDescription}>{item.description}</Text>
  </TouchableOpacity>
);

TopHeadlinesCell.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  title: textStyles.cellTitle,
  description: textStyles.cellTitle,
  image: viewStyles.cellImage,
});

export default TopHeadlinesCell;
