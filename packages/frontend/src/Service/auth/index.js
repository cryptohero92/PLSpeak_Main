import axios from 'axios';
// import Requests from '../../constants/portConstants';
import * as Requests from '../../constants/portConstants';
import { Cookies } from 'react-cookie'
import { notify } from '../../handler/handler'
export const cookies = new Cookies();

axios.defaults.baseURL = Requests.BASE_URL;
const timeout = 12000


export default async function apiRequest(apiParams) {
    const token = await cookies.get('SID')
    if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.crossDomain = true;
    const parseErrorMessage = (error) => {
        if (error.code === 'ECONNABORTED') {
            return 'Please check your network connection and try again.'
        }
        console.log("s-s-s>>>>>>>>errorslsl>>>>>>",error)
        return typeof error.message === 'object' ? Object.values(error.message).join(', '): error.message
    }
    return await axios({ timeout, ...apiParams }).then((response) => {
        let resp= { data: response.data ? response.data.data ? response.data.data : response.data : response, success: response.data.error ? false : true }
        if(resp.data && resp.data.message){
            notify(resp.data.message,'success')
        }
        return resp;
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Error", error.response.data);
            if (error.response.data && error.response.data.message && ['jwt malformed','The user does not exist or inactive'].includes(error.response.data.message)) {
                notify('Unauthorized')
                setTimeout(() => {
                    cookies.remove('SID')
                    window.location.reload();
                    return;
                }, 500);
            }
            console.log("Error", error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("Error", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log("Error", error.config);
        console.log("Error", error.toJSON());
        const errorObj = error && error.response && error.response.data && error.response.data && error.response.data ? error.response.data : error.toJSON();
        let message = parseErrorMessage(errorObj);
        notify(message);
        return {
            ...errorObj,
            message,
            // data: errorObj.data&& errorObj.data. data ? errorObj.data.data : {},
            // name: err.name,
            // stack: exception.stack,
            success: false
        };
    });;
}
