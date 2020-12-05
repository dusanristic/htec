import React, { useRef } from 'react';
import { ScrollView, Text, StyleSheet, Image, View, SafeAreaView, Linking } from 'react-native';
import i18n from 'i18n-js';
import { Core } from '_components';
import { viewStyles, textStyles } from '_styles';
import { Datetime } from '_services';

const HeadlineContentScreen = ({ route }) => {
  const item = useRef(route.params?.item).current;

  const openLink = () => {
    Linking.openURL(item.headlineUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollViewConter}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>{item.source.id || item.source.name}</Text>
          <Text style={styles.info}>{Datetime.formatDate(item.publishedAt)}</Text>
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.contentContainer}>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.separator} />
          <Text>{item.content}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>

        <View style={styles.linkContainer}>
          <Core.ClickableText text={i18n.translate('goToLink')} onPress={openLink} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollViewConter: { flexGrow: 1 },
  title: textStyles.contentTitle,
  infoContainer: viewStyles.rowSpaceBetweenContainer,
  info: textStyles.contentInfo,
  contentContainer: { marginHorizontal: 16 },
  separator: viewStyles.contentSeparator,
  description: textStyles.contentDescription,
  image: viewStyles.contentImage,
  author: textStyles.contentAuthor,
  linkContainer: viewStyles.contentLink
});

export default HeadlineContentScreen;
