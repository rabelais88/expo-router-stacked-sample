import { Stack } from "expo-router";

// import TopStatusBar from '@/components/TopStatusBar';

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        // header: (props: any) => <TopStatusBar {...props} />,
        headerBackVisible: true
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "home",
          headerBackVisible: false
        }}
      />
      <Stack.Screen
        name="users/[user]"
        options={{
          title: "user page",
          headerBackVisible: false
        }}
      />
      {/* <Stack.Screen
        name="page a"
        options={{
          title: "page a",
          headerBackVisible: false
        }}
      />
      <Stack.Screen
        name="page-b"
        options={{ title: "page b" }}
      /> */}
    </Stack>
  );
}
