import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Muisc"
        onPress={() => navigation.navigate('Musics')}
      />
      <Button
        title="Go to Muisc Lists"
        onPress={() => navigation.navigate('MusicLists')}
      />
    </View>
  );
}