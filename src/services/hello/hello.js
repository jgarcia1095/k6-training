import http from 'k6/http';
import * as general_data from '../../../resources/services/general.js'
import * as hello_data from '../../../resources/services/hello.js'

export let execute = (data) => {
    console.log("Se ejecuto default")

    console.log(data.authResponse.name)
    hello_data.headers['Authorization'] = data.authResponse.name

    const HEADERS = {
        headers: hello_data.headers
    }

    return http.get(`${general_data.base_url}${hello_data.url}`, HEADERS)
}
