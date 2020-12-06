import React, { useState } from 'react';
import { SectionList } from 'react-native';
import { HeadlineCategoriesHeader } from '_components/headers';
import HeadlineCategoryList from './HeadlineCategoriesList';

const HeadlineCategoriesSection = ({ data, onPress, onSectionPress }) => {
  /*
   * Array through which this component has awareness which section lists are expanded or collapse.
   * Its default value is undefined, so that all section lists are collapsed.
   */
  const [shouldExpand, setShouldExpand] = useState(new Array(data.length));

  const renderItem = ({ item, section }) => (
    <HeadlineCategoryList
      sectionIndex={section.header.id}
      data={item}
      shouldExpand={shouldExpand[section.header.id]}
      onPress={(itemIndex) => {
        const sectionIndex = section.header.id;
        onPress(sectionIndex, itemIndex);
      }}
    />
  );

  const renderSectionHeader = ({ section: { header } }) => (
    <HeadlineCategoriesHeader
      text={header.title}
      onPress={() => {
        /*
         * Update current state of list (whether is expanded or collapsed)
         * when its section header is pressed.
         */
        const clonedShouldExpand = [...shouldExpand];
        clonedShouldExpand[header.id] = !shouldExpand[header.id];
        setShouldExpand(clonedShouldExpand);
        onSectionPress(header);
      }}
    />
  );

  return (
    <SectionList
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      sections={data}
      keyExtractor={(item, index) => item + index}
      extraData={shouldExpand}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default HeadlineCategoriesSection;
