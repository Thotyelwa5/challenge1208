import axios from 'axios'
function applyToken(token){
    if(token){
        axios.defaults.hearder = {
            Authorization: `${token}`
        }
    }
}
export default {
    applyToken
}
