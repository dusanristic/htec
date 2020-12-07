import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Lists, Core } from '_components';
import { topHeadlinesActions, languagesSelectionActions } from '_redux/actions';
import Routes from '_navigations/Routes';
import { viewStyles } from '_styles';

const TopHeadlinesScreen = ({
  navigation,
  headlines,
  error,
  getHeadlines,
  getMoreHeadlines,
  shouldGetMore,
  params,
  isFetching,
  languages,
  selectLanguage,
  selectedLanguage
}) => {
  useEffect(() => {
    getHeadlines(params);
  }, [selectedLanguage]);

  const refreshData = () => {
    getHeadlines(params);
  };

  const getMoreArticles = () => {
    if (shouldGetMore) {
      getMoreHeadlines(params);
    }
  };

  const onLanguageSelected = (item) => {
    selectLanguage(item);
  };

  const navigateToContentScreen = (index) => {
    navigation.navigate(Routes.HeadlineContent, {
      item: headlines[index]
    });
  };

  return (
    <SafeAreaView style={styles.flex}>
      <Lists.Languages
        data={languages}
        onPress={onLanguageSelected}
        selectedLanguage={selectedLanguage}
      />
      <Lists.TopHeadlines
        data={headlines}
        onPress={navigateToContentScreen}
        onEndReached={getMoreArticles}
        onRefresh={refreshData}
        isFetching={isFetching}
      />
      {error && <Core.ErrorView />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: viewStyles.flex
});

const mapStateToProps = (state) => ({
  headlines: state.topHeadlines.data,
  shouldGetMore: state.topHeadlines.totalFetched < state.topHeadlines.total,
  params: state.topHeadlines.params,
  error: state.topHeadlines.error,
  isFetching: state.topHeadlines.isFetching,
  languages: state.languages.all,
  selectedLanguage: state.languages.selectedLanguage
});

const mapDispatchToProps = {
  getHeadlines: topHeadlinesActions.get,
  getMoreHeadlines: topHeadlinesActions.getMore,
  selectLanguage: languagesSelectionActions.select
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesScreen);
