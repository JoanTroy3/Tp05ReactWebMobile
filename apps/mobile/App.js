import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {UserProfile} from './UserProfile.native';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
        return (
                <QueryClientProvider client={queryClient}>
                        <View style={styles.container}>
                                <UserProfile/>
                                <StatusBar style="auto"/>
                        </View>
                </QueryClientProvider>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
        },
});
