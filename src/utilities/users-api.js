import sendRequest from './send-request'
import { getToken } from './users-service'

const BASE_URL = '/api/users'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}


export async function addToFavorites(breweryId, breweryData) {
    console.log(breweryId)
    console.log(breweryData)
    try {
        const response = await fetch('/api/users/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(breweryData)
        })

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        const contentType = response.headers.get('Content-Type')
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return await response.json()
        } else {
            throw new Error(`Response content type is not JSON`)
        }
    } catch (error) {
        console.error(error)
        throw new Error('Failed to add brewery to favorites')
    }
}
export async function getSavedBreweries() {
    return sendRequest('/api/users/favorites', 'GET')
}

// export async function getSavedBreweries(userId) {
//     try {
//         const response = await fetch(`/api/users/${userId}/favorites`);
//         const data = await response.json();
//         console.log(data); // make sure data is being received correctly
//         return data;
//     } catch (error) {
//         console.error(error);
//         return undefined; // make sure an error doesn't cause undefined to be returned
//     }
// }