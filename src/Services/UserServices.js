import axios from "axios";
 
let userURL = "http://localhost:4000/users";
 
export const getUserInfoByID = (useremail) => {
    console.log(useremail)
    let userURLFilter = userURL + "?useremail=" + useremail
    return axios.get(userURLFilter)
        .then(res => { console.log(res.data); return res.data; });
}