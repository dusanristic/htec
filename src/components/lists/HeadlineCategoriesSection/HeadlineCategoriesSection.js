import React from 'react';
import { SectionList } from 'react-native';
import { MockedData } from '_data';
import { HeadlineCategories } from '_components/headers';
import HeadlineCategoryList from './HeadlineCategoriesList';

const HeadlineCategoriesSection = () => (
  <SectionList
    stickySectionHeadersEnabled={false}
    showsVerticalScrollIndicator={false}
    sections={MockedData.headlineCategories}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <HeadlineCategoryList data={item} />}
    renderSectionHeader={({ section: { header } }) => (
      <HeadlineCategories text={header.title} onPress={() => console.log(header.id)} />
    )}
  />
);

export default HeadlineCategoriesSection;
