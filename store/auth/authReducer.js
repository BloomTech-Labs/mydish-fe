const authStore = {
    user: {
        username: "",
        userID: null,
    },
    isAuthorizing: false,
    error: null,
};

export const authReducer = (state = authStore, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
