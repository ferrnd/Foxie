import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,
                tabBarActiveTintColor: '#48ff66',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    headerTitle: 'Projeto Base',
                }}
            />
            <Tabs.Screen
                name="aulas"
                options={{
                    title: 'Aulas',
                    headerTitle: 'Conteúdo',
                }}
            />
                <Tabs.Screen
                    name="sobre"
                    options={{
                        title: 'Sobre',
                        headerTitle: 'Sobre',
                    }}
                />
                <Tabs.Screen
                    name="post"
                    options={{
                        title: 'Create',
                        headerTitle: 'Create',
                    }}
                />
            <Tabs.Screen
                name="api"
                options={{
                    title: 'Read',
                    headerTitle: 'Read',
                }}
            />
            <Tabs.Screen
                name="put"
                options={{
                    title: 'Update',
                    headerTitle: 'Update',
                }}
            />
            <Tabs.Screen
                name="delete"
                options={{
                    title: 'Delete',
                    headerTitle: 'Delete',
                }}
            />
                <Tabs.Screen
                    name="getById"
                    options={{
                        title: 'GetByID',
                        headerTitle: 'GetByID',
                    }}
                />
        </Tabs>
    );
}