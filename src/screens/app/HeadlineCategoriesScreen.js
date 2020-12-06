import React from 'react';
import { SafeAreaView } from 'react-native';
import { Lists } from '_components';

export default function HeadlineCategoriesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lists.HeadlineCategories />
    </SafeAreaView>
  );
}
