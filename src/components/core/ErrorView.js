import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { viewStyles, textStyles } from '_styles';
import i18n from 'i18n-js';

const ErrorView = () => (
  <View style={styles.container}>
    <Text style={styles.title}>{i18n.translate('errorTitle')}</Text>
    <Text style={styles.info}>{i18n.translate('errorInfo')}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: viewStyles.error,
  title: textStyles.errorTitle,
  info: textStyles.errorInfo
});

export default ErrorView;
