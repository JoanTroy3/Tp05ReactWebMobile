import {useUserProfile} from '@tp06/core';
import './UserProfile.web.css';

export function UserProfile() {
        const {user, loading, error, refetch} = useUserProfile();

        if (loading) {
                return <p>Chargement...</p>;
        }
        if (error) {
                return <div style={{color: 'red'}}>Erreur : {error}</div>;
        }

        return (
                <div className="profile-card">
                        <img src={user.picture.large} alt={"Profile image"}/>
                        <h2>{user.name.first} {user.name.last}</h2>
                        <p>{user.email}</p>
                        <p>{user.location.city}, {user.location.country}</p>
                        <button type="button" onClick={() => refetch()}>
                                Rafraîchir
                        </button>
                        {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
                </div>
        );
}
