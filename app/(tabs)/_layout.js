import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#27a566",
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
          headerTitle: "Projeto Base",
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
