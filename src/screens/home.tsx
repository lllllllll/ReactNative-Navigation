import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchUser } from '../store/actions';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(({getUser}: any) => getUser.data);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME</Text>

      <Text>{user?.name}</Text>

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