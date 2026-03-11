import { useUserProfile } from '@tp06/core';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export function UserProfile() {
  const { user, loading, error } = useUserProfile();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erreur: {error}</Text>
      </View>
    );
  }

  return (
          <View style={styles.container}>
            <Text style={styles.title}>Profil Utilisateur (Mobile)</Text>

            {user && (
                    <View style={styles.card}>
                      <Image source={{ uri: user.picture.large }} style={styles.avatar} />
                      <Text style={styles.name}>
                        {user.name.first} {user.name.last}
                      </Text>

                      <Text style={styles.email}>{user.email}</Text>
                      <Text style={styles.email}>{user.location.city}, {user.location.country}</Text>
                    </View>

            )}
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    width: '100%',
    maxWidth: 320,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
