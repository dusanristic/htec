import React from 'react';
import { SafeAreaView } from 'react-native';
import { Lists } from '_components';
import Routes from '_navigations/Routes';
import { MockedData } from '_data';

export default function HeadlineCategoriesScreen({ navigation }) {
  const navigateToContentScreen = (sectionIndex, itemIndex) => {
    const item = MockedData.headlineCategories[sectionIndex].data[0][itemIndex];
    navigation.navigate(Routes.HeadlineContent, {
      item
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lists.HeadlineCategories
        data={MockedData.headlineCategories}
        onPress={navigateToContentScreen}
      />
    </SafeAreaView>
  );
}
