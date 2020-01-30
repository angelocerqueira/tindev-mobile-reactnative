import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #f5f5f5;
`;

export const Input = styled.TextInput`
  height: 50px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #fff;
  margin: 20px 0 10px 0;
  align-self: stretch;
`;

export const Button = styled.TouchableOpacity`
  background: #df4723;
  height: 50px;
  padding: 0 20px;
  align-self: stretch;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;
