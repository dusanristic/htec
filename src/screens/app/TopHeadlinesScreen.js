import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Lists } from '_components';
import { topHeadlinesActions } from '_redux/actions';

const TopHeadlinesScreen = ({ headlines, getHeadlines }) => {
  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Lists.TopHeadlines data={headlines} />
    </View>
  );
};

const mapStateToProps = (state) => ({ headlines: state.TopHeadlines.data });

const mapDispatchToProps = {
  getHeadlines: topHeadlinesActions.load
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesScreen);
