import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme } from "tamagui";

import config from "../tamagui.config";
import { emerald, zinc } from "../utils/colors";

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider
      value={{
        colors: {
          border: "transparent",
          primary: emerald["600"],
          background: zinc["900"],
          text: zinc["100"],
          card: zinc["700"],
          notification: emerald["400"]
        },
        dark: true
      }}
    >
      <TamaguiProvider config={config}>
        <Theme name={colorScheme}>
          <SafeAreaView style={{ flex: 1 }}>
            <Drawer
              //  drawerContent={(p) => <Drawers {...p} />}
              screenOptions={{
                drawerPosition: "right",
                headerShown: false
              }}
            >
              <Drawer.Screen name="(tabs)" />
            </Drawer>
          </SafeAreaView>
        </Theme>
        <StatusBar
          style="light"
          backgroundColor="#000000"
        />
      </TamaguiProvider>
    </ThemeProvider>
  );
}
