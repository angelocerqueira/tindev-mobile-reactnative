import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';

import {
  Container,
  Logo,
  CardsContainer,
  Card,
  Footer,
  Name,
  Empty,
  Bio,
  Avatar,
  ButtonsContainer,
  Button,
  MatchContainer,
  MatchName,
  MatchAvatar,
  MatchBio,
  MatchButton,
  MatchTitle,
  TextButton,
} from './styles';

export default function Main({ navigation }) {
  const id = navigation.getParam('user');

  const [users, setUsers] = useState([]);
  const [matchDev, setMacthDev] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: id,
        },
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [id]);

  useEffect(() => {
    const socket = io('http://10.0.0.108:3333', {
      query: { user: id },
    });
    socket.on('match', dev => {
      setMacthDev(dev);
    });
  }, [id]);

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/likes`, null, {
      headers: { user: id },
    });
    setUsers(rest);
  }

  async function handleDislike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/dislikes`, null, {
      headers: { user: id },
    });
    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }
  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CardsContainer>
        {users.length === 0 ? (
          <Empty> Acabou :( </Empty>
        ) : (
          users.map((user, index) => (
            <Card key={user._id} style={{ zIndex: users.length - index }}>
              <Avatar
                source={{
                  uri: user.avatar,
                }}
              />
              <Footer>
                <Name>{user.name}</Name>
                <Bio numberOfLines={3}>{user.bio}</Bio>
              </Footer>
            </Card>
          ))
        )}
      </CardsContainer>
      {users.length > 0 && (
        <ButtonsContainer>
          <Button onPress={handleDislike}>
            <Image source={dislike} />
          </Button>
          <Button onPress={handleLike}>
            <Image source={like} />
          </Button>
        </ButtonsContainer>
      )}

      {matchDev && (
        <MatchContainer>
          <MatchTitle>Its a match!!</MatchTitle>
          <MatchAvatar
            source={{
              uri: matchDev.avatar,
            }}
          />
          <MatchName> {matchDev.name} </MatchName>
          <MatchBio>{matchDev.bio}</MatchBio>
          <MatchButton onPress={() => setMacthDev(null)}>
            <TextButton> FECHAR </TextButton>
          </MatchButton>
        </MatchContainer>
      )}
    </Container>
  );
}
