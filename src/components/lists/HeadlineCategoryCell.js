import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { viewStyles, textStyles, constants } from '_styles';

const windowWidth = Dimensions.get('window').width;

const HeadlineCategoryCell = ({ item, onPress }) => (
  <TouchableOpacity
    activeOpacity={constants.activeOpacity}
    onPress={onPress}
    style={styles.container}>
    <Text style={styles.title}>{item.title}</Text>

    <View style={styles.bottomContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      <Text numberOfLines={constants.linesOfDescription} style={styles.description}>
        {item.description}
      </Text>
    </View>
  </TouchableOpacity>
);

HeadlineCategoryCell.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  container: { width: windowWidth },
  bottomContainer: { justifyContent: 'flex-end', flex: 1 },
  title: textStyles.categoryCellTitle,
  description: textStyles.categoryCellDescription,
  image: viewStyles.categoryCellImage
});

export default HeadlineCategoryCell;
