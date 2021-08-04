import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useStore } from '../../stores/createStore';

function ProfileScreen() {
  const store = useStore();
  useEffect(() => {
    store?.viewer.fetchUser.run();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}
export default ProfileScreen;
