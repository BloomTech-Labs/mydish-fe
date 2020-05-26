import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { logoHeaderPlain } from './header/navigationHeader';
import { getAllCookbookRecipes } from '../store/cookbook/cookbookAction';
import theme from '../styles/theme.style';

import { ListItem } from 'react-native-elements';

import { getUser } from '../store/users/usersActions';

const MyProfile = (props) => {
  const dispatch = useDispatch();
  const owner_id = useSelector((state) => state.singleRecipe.recipe);
  const nickname = useSelector((state) => state.users.user.display_name);
  const avatar = useSelector((state) => state.users.user.avatar_url);
  const email = useSelector((state) => state.users.user.email);
  const username = useSelector((state) => state.users.user.username);
  const cookbook = useSelector((state) => state.cookbook.entireCookbook);
  const guestid = owner_id.owner.user_id;

  const getInfo = () => {
    dispatch(getUser(guestid));
  };

  useEffect(() => {
    dispatch(getAllCookbookRecipes());
  }, [dispatch, getAllCookbookRecipes]);

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
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('MyCookBook');
        }}
      >
        <ListItem
          title={nickname}
          subtitle={email}
          badge={{
            value: `Cookbook ${cookbook.length}`,
            textStyle: {
              backgroundColor: '#D2291F',
              color: 'white',
              fontFamily: 'nunito sans',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              width: 113,
              height: 28,
              borderRadius: 5,
              textAlign: 'center',
              paddingTop: 5,
              fontWeight: 'bold',
              fontSize: 14,
            },
            containerStyle: {
              marginTop: -20,
              borderRadius: 100,
            },
          }}
        />
      </TouchableOpacity>
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

MyProfile.navigationOptions = logoHeaderPlain;

export default MyProfile;
