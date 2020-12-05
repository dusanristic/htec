import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Routes from '_navigations/Routes';

const HeadlinesScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Headlines Screen</Text>
    <TouchableOpacity
      style={{ borderColor: 'black', borderWidth: 1, margin: 16, padding: 4 }}
      onPress={() => navigation.navigate(Routes.HeadlineContent)}>
      <Text>Open modal</Text>
    </TouchableOpacity>
  </View>
);

export default HeadlinesScreen;
