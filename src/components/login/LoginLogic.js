import { getUserInfoByID } from "../../Services/UserServices";

 
export const checkValidUser = async (username, pwd) => {
    let dbUsername;
    let check;
    check = await getUserInfoByID(username).then(res => res[0])
        .then(rs => dbUsername = rs)
    return dbUsername;
}
 
export const setAuthentication = () => {
    sessionStorage.setItem('isLoggedIn', true);
}
 
export const clearAuthentication = () => {
    sessionStorage.clear();
}
 
export const getValidAuthentication = () => {
    return sessionStorage.getItem('isLoggedIn');
}