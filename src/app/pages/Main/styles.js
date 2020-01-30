import styled from 'styled-components/native';

export const Empty = styled.Text`
  align-self: center;
  color: #999;
  font-size: 26px;
  font-weight: bold;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;

export const Logo = styled.Image`
  margin-top: 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;
export const Card = styled.View`
  border: solid 1px #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Avatar = styled.Image`
  flex: 1;
  height: 300px;
`;
export const Footer = styled.View`
  padding: 15px 20px;
  background: #fff;
`;
export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding-bottom: 30px;
  z-index: -1;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  elevation: 2;
`;

export const MatchContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  /* width: 100%; */
  /* height: auto; */
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
export const MatchTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: sans-serif;
  font-style: italic;
`;
export const MatchAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 5px solid #fff;
  margin: 30px 0;
`;

export const MatchName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
`;

export const MatchBio = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  text-align: center;
  padding: 0 30px;
`;
export const MatchButton = styled.TouchableOpacity``;
export const TextButton = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
