import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, View } from "react-native";
import Login from "./src/screen/authentication/login/login.screen";
import SignUp from "./src/screen/authentication/signUp/signUp.screen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: any;
  SignUp: any;
};

export default function AppInner() {
  const [TemporaryLoginBranch, setTemporaryLoginBranch] = useState(false);
  return (
    <>
      <NavigationContainer>
        {!TemporaryLoginBranch ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "로그인" }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "회원가입" }}
            />
          </Stack.Navigator>
        ) : (
          <View>
            <Text>로그인 이후</Text>
          </View>
        )}
      </NavigationContainer>
    </>
  );
}
