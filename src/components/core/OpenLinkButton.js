import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import { textStyles } from '_styles';

const OpenLinkButton = ({ text, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}>
      <Text style={isPressed ? styles.clicked : styles.unclicked}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  clicked: { ...textStyles.goToLink, opacity: 0.3 },
  unclicked: textStyles.goToLink
});

export default OpenLinkButton;
