import {useState, useEffect} from 'react';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchUser} from "./services/api";

/**
 * Hook personnalisé agnostique pour gérer le profil utilisateur.
 * Ne doit contenir AUCUN code spécifique à la plateforme (pas de div, pas de View).
 */
export function useUserProfile() {
        // TODO: Etape 1 - Le Cerveau
        const queryClient = useQueryClient()
        // 1. Initialiser les états : user (null), loading (true), error (null)
        const {data, isLoading, error} = useQuery(
                {
                        queryKey: ['users'],
                        queryFn: fetchUser,
                        staleTime: 1000 * 60 * 5,
                        retry: 3,
                }
        );
        // 2. Utiliser useEffect pour appeler l'API au montage
        // API URL: https://randomuser.me/api/

        // 3. Gérer le fetch, la réponse JSON, et les cas d'erreur

        // 4. Retourner l'objet { user, loading, error }

        return {
                user: data?.results[0],
                loading: isLoading,
                error: error,
        };
}
