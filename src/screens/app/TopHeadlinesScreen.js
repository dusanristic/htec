import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Lists, Core } from '_components';
import { topHeadlinesActions } from '_redux/actions';
import Routes from '_navigations/Routes';
import { viewStyles } from '_styles';

const TopHeadlinesScreen = ({
  navigation,
  headlines,
  error,
  getHeadlines,
  getMoreHeadlines,
  shouldGetMore,
  fetchConfig,
  isFetching
}) => {
  useEffect(() => {
    getHeadlines(fetchConfig);
  }, []);

  const navigateToContentScreen = (index) => {
    navigation.navigate(Routes.HeadlineContent, {
      item: headlines[index]
    });
  };

  const getMoreArticles = () => {
    if (shouldGetMore) {
      getMoreHeadlines(fetchConfig);
    }
  };

  const refreshData = () => {
    getHeadlines(fetchConfig);
  };

  return (
    <SafeAreaView style={styles.flex}>
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
  fetchConfig: state.topHeadlines.config,
  error: state.topHeadlines.error,
  isFetching: state.topHeadlines.isFetching
});

const mapDispatchToProps = {
  getHeadlines: topHeadlinesActions.get,
  getMoreHeadlines: topHeadlinesActions.getMore
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesScreen);
