export const authModule = {
    state: () => ({
        isAuth: true,
    }),
    mutations: {
        setIsAuth(state, bool) {
            state.isAuth = bool;
        },
    },
};
