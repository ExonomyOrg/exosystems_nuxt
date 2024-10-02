// layers/auth/stores/tokenStore.ts
import { defineStore } from 'pinia'

interface TokenState {
    google_token: string | null;
    github_token: string | null;
    metamask_token: string | null;
}

export const useTokenStore = defineStore('token', {
    state: (): TokenState => ({
        google_token: null,
        github_token: null,
        metamask_token: null,
    }),
    getters: {
        // Getters to retrieve token values
        getGoogleToken: (state) => state.google_token,
        getGithubToken: (state) => state.github_token,
        getMetamaskToken: (state) => state.metamask_token,
    },
    actions: {
        // Actions to set token values
        setGoogleToken(token: string) {
            this.google_token = token
        },
        setGithubToken(token: string) {
            this.github_token = token
        },
        setMetamaskToken(token: string) {
            this.metamask_token = token
        },
        // Actions to clear individual tokens
        clearGoogleToken() {
            this.google_token = null
        },
        clearGithubToken() {
            this.github_token = null
        },
        clearMetamaskToken() {
            this.metamask_token = null
        },
        // Optional: Clear all tokens
        clearTokens() {
            this.google_token = null
            this.github_token = null
            this.metamask_token = null
        },
    },
})
