import {useQuery} from "@tanstack/react-query";
import {fetchUser} from "./services/api";

/**
 * Hook personnalisé agnostique pour gérer le profil utilisateur.
 * Ne doit contenir AUCUN code spécifique à la plateforme (pas de div, pas de View).
 */
export function useUserProfile() {
        const {data, isLoading, error, refetch} = useQuery(
                {
                        queryKey: ['users'],
                        queryFn: fetchUser,
                        staleTime: 1000 * 60 * 5,
                        retry: 3,
                }
        );

        return {
                user: data?.results[0],
                loading: isLoading,
                error: error,
                refetch
        };
}
