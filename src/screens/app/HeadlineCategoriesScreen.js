import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Lists, Core } from '_components';
import Routes from '_navigations/Routes';
import { headlineCategoriesActions, languagesSelectionActions } from '_redux/actions';
import { viewStyles } from '_styles';

function HeadlineCategoriesScreen({
  navigation,
  headlinesByCategory,
  getHeadlinesByCategory,
  error,
  params,
  categories,
  languages,
  selectLanguage,
  selectedLanguage
}) {
  const [expandedSectionsIndices, setExpandedSectionsIndices] = useState([]);

  useEffect(() => {
    expandedSectionsIndices.forEach((index) => {
      getHeadlinesByCategory(categories[index], params);
    });
  }, [selectedLanguage]);

  const onLanguageSelected = (item) => {
    selectLanguage(item);
  };

  const navigateToContentScreen = (sectionIndex, itemIndex) => {
    const item = headlinesByCategory[sectionIndex].data[0][itemIndex];
    navigation.navigate(Routes.HeadlineContent, {
      item
    });
  };

  return (
    <SafeAreaView style={styles.flex}>
      <Lists.Languages
        data={languages}
        onPress={onLanguageSelected}
        selectedLanguage={selectedLanguage}
      />
      <Lists.HeadlineCategories
        data={headlinesByCategory}
        onPress={navigateToContentScreen}
        onSectionPress={(header) => getHeadlinesByCategory(header.title, params)}
        onSectionExpanded={setExpandedSectionsIndices}
      />

      {error && <Core.ErrorView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: viewStyles.flex
});

const mapStateToProps = (state) => ({
  headlinesByCategory: state.headlineCategories.data,
  error: state.headlineCategories.error,
  params: state.headlineCategories.params,
  categories: state.headlineCategories.categories,
  languages: state.languages.all,
  selectedLanguage: state.languages.selectedLanguage
});

const mapDispatchToProps = {
  getHeadlinesByCategory: headlineCategoriesActions.load,
  selectLanguage: languagesSelectionActions.select
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineCategoriesScreen);
