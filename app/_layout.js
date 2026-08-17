import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" translucent />

      <Stack screenOptions={{ headerShadowVisible: false,
        contentStyle: { backgroundColor: "transparent"}
       }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            title: "Exemplo de modal",
          }}
        />
      </Stack>
    </>
  );
}
