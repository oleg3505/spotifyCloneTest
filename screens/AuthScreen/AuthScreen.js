import React, { useCallback, useState } from 'react';
import { Text, Linking, Alert } from 'react-native';
import { Container } from '../../components/Container';
import { InputToken } from './components/InputToken';
import Api from '../../api';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../navigation/screens';
import { InstructionText } from './components/InstructionText';
import { TokenErr } from './components/TokenErr';
import { SubmitButton } from '../../components/SubmitButton';

function AuthScreen() {
  const nav = useNavigation();
  async function onPressSubmit() {
    try {
      const res = await Api.Auth.loginWithToken(token);

      await Api.Auth.setToken(token);
      nav.navigate(screens.Tab);
    } catch (err) {
      setTokenErr(true);
    }
    setToken('');
  }
  const [tokenErr, setTokenErr] = useState(false);
  const [token, setToken] = useState('');

  const supportedURL =
    'https://developer.spotify.com/console/get-current-user/';
  const onPressGetToken = useCallback(async () => {
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);
  return (
    <Container>
      <InputToken
        placeholder="Past your token to login"
        value={token}
        onChangeText={setToken}
      />
      {tokenErr ? <TokenErr>Incorect token</TokenErr> : null}

      <SubmitButton onPress={onPressSubmit}>
        <Text>Login with token</Text>
      </SubmitButton>

      <InstructionText>Some instruction:</InstructionText>
      <InstructionText>1.Click on Get token.</InstructionText>
      <InstructionText>2.Find on page button Get token.</InstructionText>
      <InstructionText>
        3.Scrolling down ang press Request token.
      </InstructionText>
      <InstructionText>4.Log in or register.</InstructionText>
      <InstructionText>
        5.Copy all signs in text box near button Get token and past them on top.
      </InstructionText>
      <InstructionText>You can get token there:</InstructionText>

      <SubmitButton onPress={onPressGetToken}>
        <Text>Get token</Text>
      </SubmitButton>
    </Container>
  );
}
export default AuthScreen;
