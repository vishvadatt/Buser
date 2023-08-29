export const isAuthenticated = (state) => {
    if (state.auth.auth.idToken) return true;
    return false;
};

export const loginUserData = (state) => state.auth.loginUserData;
export const loginStatus = (state) => state.auth.loginStatus;
export const successMessage = (state) => state.auth.successMessage;
export const errorMessage = (state) => state.auth.errorMessage;
export const signupDetails = (state) => state.auth.signupDetails;
export const userId = (state) => state.auth.userId;
export const showLoading = (state) => state.auth.showLoading;
export const firstTimeLogin = (state) => state.auth.firstTimeLogin;
export const authToken = (state) => state.auth.auth.idToken;
export const isForgettingPassword = (state) => state.auth.isForgettingPassword;
export const getAllDoctors = (state) => state.auth.getAllDoctors;
export const getSearchedDoctors = (state) => state.auth.getSearchedDoctors;
export const graphShow = (state) => state.auth.graphShow;