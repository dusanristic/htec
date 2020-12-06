import React from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView } from 'react-native';
import { Lists, Core } from '_components';
import Routes from '_navigations/Routes';
import { headlineCategoriesActions } from '_redux/actions';

function HeadlineCategoriesScreen({
  navigation,
  headlinesByCategory,
  getHeadlinesByCategory,
  error
}) {
  const navigateToContentScreen = (sectionIndex, itemIndex) => {
    const item = headlinesByCategory[sectionIndex].data[0][itemIndex];
    navigation.navigate(Routes.HeadlineContent, {
      item
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lists.HeadlineCategories
        data={headlinesByCategory}
        onPress={navigateToContentScreen}
        onSectionPress={(header) => getHeadlinesByCategory(header.title)}
      />

      {error && <Core.ErrorView />}
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  headlinesByCategory: state.headlineCategories.data,
  error: state.headlineCategories.error
});

const mapDispatchToProps = {
  getHeadlinesByCategory: headlineCategoriesActions.load
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineCategoriesScreen);
