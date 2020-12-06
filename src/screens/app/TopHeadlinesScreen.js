import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { Lists, Core } from '_components';
import { topHeadlinesActions } from '_redux/actions';
import Routes from '_navigations/Routes';

const TopHeadlinesScreen = ({ navigation, headlines, error, getHeadlines }) => {
  useEffect(() => {
    getHeadlines();
  }, []);

  const navigateToContentScreen = (index) => {
    navigation.navigate(Routes.HeadlineContent, {
      item: headlines[index]
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lists.TopHeadlines data={headlines} onPress={navigateToContentScreen} />
      {error && <Core.ErrorView />}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  headlines: state.topHeadlines.data,
  error: state.topHeadlines.error
});

const mapDispatchToProps = {
  getHeadlines: topHeadlinesActions.load
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesScreen);
