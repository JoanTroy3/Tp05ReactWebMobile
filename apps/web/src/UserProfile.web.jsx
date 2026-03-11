import { useUserProfile } from '@tp06/core';
import './UserProfile.web.css';

export function UserProfile() {
  const { user, loading, error } = useUserProfile();

  if (loading) {
    return <p>Chargement...</p>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>Erreur : {error}</div>;
  }

  return (
    <div className="profile-card">
      {/* TODO: Afficher l'image et les infos ici */}
      <img src={user.picture.large} alt={"Profile image"}/>
      <h2>{user.name.first} {user.name.last}</h2>
      <p>{user.email}</p>
      <p>{user.location.city}, {user.location.country}</p>
      {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
    </div>
  );
}
