

const YELP_API_BASE_URL = 'https://api.yelp.com/v3'

const apiKey = process.env.YELP_API_KEY

async function searchBusinesses(location) {

    const url = `${YELP_API_BASE_URL}/businesses/search?location=${location}&term=brewery`

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },


    })

    const data = await res.json()
    console.log(data)
    return data.businesses
}

async function getBusinessDetails(businessId) {
    const url = `${YELP_API_BASE_URL}/businesses/${businessId}`

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
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
            'Authorization': `Bearer ${apiKey}`,
        },
    })

    const data = await res.json()
    return data.reviews
}

module.exports = {
    searchBusinesses,
    getBusinessDetails,
    getBusinessReviews
}