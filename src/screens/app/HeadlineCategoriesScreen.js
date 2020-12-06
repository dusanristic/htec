import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { Lists } from '_components';
import Routes from '_navigations/Routes';
import { headlineCategoriesActions } from '_redux/actions';

function HeadlineCategoriesScreen({ navigation, headlinesByCategory, getHeadlinesByCategory }) {
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
        onSectionPress={(header) => console.log(header)}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({ headlinesByCategory: state.HeadlineCategories });

const mapDispatchToProps = {
  getHeadlinesByCategory: headlineCategoriesActions.load
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineCategoriesScreen);
