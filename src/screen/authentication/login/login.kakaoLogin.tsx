import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { RootStackParamList } from "../../../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRecoilState } from "recoil";
import { setUserAccessTokenState, setUserState } from "../../../store";
import LoadingScreen from "../../../components/loadingScreen";
type KakaoLoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "KakaoLogin"
>;
const REST_API_KEY = "99305d47bf5d3734c754b23eacbe9452";
const REDIRECT_URI = "http://192.168.1.151:19000"; //backend로 변경해보기
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export default function KakaoLogin({ navigation }: KakaoLoginScreenProps) {
  const [showLogin, setShowLogin] = useState(true);
  const containerStyle = showLogin ? styles.show : styles.container;
  const [userAccessToken, setUserAccessToken] = useRecoilState(
    setUserAccessTokenState
  );
  const [user, setUser] = useRecoilState(setUserState);
  const [webviewError, setWebviewError] = useState(null);
  const [captchaImageUrl, setCaptchaImageUrl] = useState(null);

  // 첫 번째 단계: authorizeCode 받아오기
  const KakaoLoginWebView = (data: any) => {
    const exp = "code=";
    let condition = data.indexOf(exp);
    if (condition != -1) {
      setShowLogin(false);
      let authorizeCode = data.substring(condition + exp.length);
      requestToken(authorizeCode);
    }
  };

  // 두 번째 단계: authorizeCode를 넣어 kakao AccessToken 받아오기
  const requestToken = (authorizeCode: string) => {
    axios({
      method: "post",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorizeCode,
      },
    })
      .then((response) => {
        let AccessToken = response.data.access_token;
        setUserAccessToken(AccessToken); // Access Token 저장
        requestUserInfo(AccessToken);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  // 세 번째 단계: kakao로부터 유저 정보 받아오기
  const requestUserInfo = (AccessToken: string) => {
    axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    }).then((response) => {
      setUser(response.data);
      navigation.navigate("test");
    });
  };

  // 에러 핸들러 함수 추가
  const handleWebViewError = (error: any) => {
    // 에러 메시지를 상태에 저장
    setWebviewError(error);
    console.log(error);
  };

  const randomState =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const handleNavigationStateChange = (navState: any) => {
    if (
      navState.url.includes(
        `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&state=${randomState}&error=access_denied`
      )
    ) {
      navigation.navigate("Login");
    }
  };

  return (
    <>
      <View style={containerStyle}>
        <WebView
          originWhitelist={["*"]}
          scalesPageToFit={false}
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled
          onMessage={(event) => {
            KakaoLoginWebView(event.nativeEvent["url"]);
          }}
          onNavigationStateChange={handleNavigationStateChange}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  show: {
    flex: 1,
    color: "#fff",
  },
  container: {
    marginTop: 24,
  },
  errorText: {
    color: "red",
  },
});
