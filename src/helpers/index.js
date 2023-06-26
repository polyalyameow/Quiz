export const authenticate = () => {
    if(localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"))
    } else {
        return false;
    }
};
//The above function checks if user is autheniticated. If the user exists in
//localStorage, the user is authenticated. We parse the return to trnslate it from JSON string into an object in JS.
//If user doesn't exist is the localStorage, the false return indicates that the user is not authenticated.