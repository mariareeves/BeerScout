

const YELP_API_BASE_URL = 'https://api.yelp.com/v3'

module.exports = {
    searchBusinesses,
    getBusinessDetails,
    getBusinessReviews,
}

async function searchBusinesses(location) {
    const params = {
        term: 'brewery',
        location: location,
    }
    const url = `${YELP_API_BASE_URL}/businesses/search`

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
        },
        body: JSON.stringify(params)
    })

    const data = await res.json()
    return data.businessess
}

async function getBusinessDetails(businessId) {
    const url = `${YELP_API_BASE_URL}/businesses/${businessId}`

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
        },
    })


    const data = await res.json()
    return data
}


async function getBusinessReviews(businessId) {
    const url = `${YELP_API_BASE_URL}/businesses/${businessId}/reviews`

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
        },
    })

    const data = await res.json()
    return data.reviews
}