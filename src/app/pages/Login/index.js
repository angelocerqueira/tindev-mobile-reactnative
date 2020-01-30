import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, Platform } from 'react-native';
import api from '../../services/api';
import { Container, Input, Button, Text } from './styles';
import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    });
  }, []);
  async function handleLogin() {
    console.log(user);
    const response = await api.post('/devs', { username: user });
    const { _id } = response.data;
    console.log(_id);

    await AsyncStorage.setItem('user', _id);
    navigation.navigate('Main', { user: _id });
  }

  return (
    <Container enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder=" Digite seu usuário no github "
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />
      <Button onPress={handleLogin}>
        <Text> Enviar</Text>
      </Button>
    </Container>
  );
}
