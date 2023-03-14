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


export async function addToFavorites(breweryId) {
    try {
        const response = await fetch('/api/users/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ brewery: breweryId })
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
    const res = await sendRequest('/api/users/favorites', 'GET');
    return res.favorites;
}