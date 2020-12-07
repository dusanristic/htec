import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Lists, Core } from '_components';
import Routes from '_navigations/Routes';
import { searchedHeadlinesActions } from '_redux/actions';
import { viewStyles, textStyles } from '_styles';
import i18n from 'i18n-js';

const SearchHeadlinesScreen = ({ navigation, searchHeadlines, headlines, error }) => {
  const navigateToContentScreen = (index) => {
    navigation.navigate(Routes.HeadlineContent, {
      item: headlines[index]
    });
  };

  const onSubmit = (text) => {
    if (text.length) {
      searchHeadlines(text);
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      {headlines.length ? (
        <Lists.TopHeadlines data={headlines} onPress={navigateToContentScreen} />
      ) : (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>{i18n.translate('noSearchedHeadlines')}</Text>
        </View>
      )}
      {error && <Core.ErrorView />}
      <View style={styles.shadow}>
        <TextInput
          style={styles.input}
          onEndEditing={({ nativeEvent }) => onSubmit(nativeEvent.text)}
          placeholder={i18n.translate('enterKeyword')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: viewStyles.flex,
  shadow: viewStyles.shadow,
  input: viewStyles.searchInputField,
  noContentContainer: viewStyles.noSearchedHeadlines,
  noContentText: textStyles.noSearchedHeadlines
});

const mapStateToProps = (state) => ({
  headlines: state.searchedHeadlines.data,
  error: state.searchedHeadlines.error
});

const mapDispatchToProps = {
  searchHeadlines: searchedHeadlinesActions.search
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeadlinesScreen);
