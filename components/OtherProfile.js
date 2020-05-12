import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { logoHeaderPlain } from './header/navigationHeader';

import { ListItem } from 'react-native-elements';

import { getUser } from '../store/users/usersActions';

const OtherProfile = (props) => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.singleRecipe.recipe);
  const owner_id = useSelector((state) => state.singleRecipe.recipe);
  const nickname = useSelector((state) => state.users.user.display_name);
  const avatar = useSelector((state) => state.users.user.avatar_url);
  const email = useSelector((state) => state.users.user.email);
  const username = useSelector((state) => state.users.user.username);

  const guestid = owner_id.owner.user_id;

  const getInfo = () => {
    dispatch(getUser(guestid));
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.username}>{`${username}`}</Text>

        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: `${avatar}`,
          }}
        />
      </View>
      <View>
        <ListItem title={nickname} subtitle="User" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 10,
  },
});

OtherProfile.navigationOptions = logoHeaderPlain;

export default OtherProfile;
