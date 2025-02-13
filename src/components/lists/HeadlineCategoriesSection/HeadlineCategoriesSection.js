import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';
import { HeadlineCategoriesHeader } from '_components/headers';
import HeadlineCategoryList from './HeadlineCategoriesList';

const HeadlineCategoriesSection = ({ data, onPress, onSectionPress, onSectionExpanded }) => {
  const [expandedLists, setExpandedLists] = useState(new Array(data.length));

  useEffect(() => {
    const expandedSectionsIndices = expandedLists.flatMap((bool, index) => (bool ? index : []));
    onSectionExpanded(expandedSectionsIndices);
  }, [expandedLists]);

  const renderItem = ({ item, section }) => (
    <HeadlineCategoryList
      sectionIndex={section.header.id}
      data={item}
      isExpanded={expandedLists[section.header.id]}
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
        const clonedShouldExpand = [...expandedLists];
        clonedShouldExpand[header.id] = !expandedLists[header.id];
        // Do not fetch data when on section collapse
        if (!expandedLists[header.id]) {
          onSectionPress(header);
        }
        setExpandedLists(clonedShouldExpand);
      }}
    />
  );

  return (
    <SectionList
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default HeadlineCategoriesSection;
