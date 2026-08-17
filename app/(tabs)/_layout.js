import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
          height: 80,
          paddingBottom: 25,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#fefffe",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name="aulas"
        options={{
          title: "Aulas",
          headerTitle: "Conteúdo",
        }}
      />
      <Tabs.Screen
        name="interface"
        options={{
          title: "Interface",
          headerTitle: "Interface",
        }}
      />
      <Tabs.Screen
        name="exemplo"
        options={{
          title: "Sobre",
          headerTitle: "Sobre",
        }}
      />
    </Tabs>
  );
}
