import { Tabs } from "expo-router";

// import BottomNavBar from '@/components/BottomNavBar';

// https://expo.github.io/router/docs/features/routing#layout-settings
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "(stacks)"
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      //   tabBar={(p) => <BottomNavBar {...p} />}
    >
      <Tabs.Screen name="(stacks)" />
    </Tabs>
  );
}
