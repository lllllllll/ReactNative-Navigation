import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PROFILE</Text>
      <Button
        title="Go to Music Lists"
        onPress={() => navigation.navigate('MusicLists')}
      />
    </View>
  );
}