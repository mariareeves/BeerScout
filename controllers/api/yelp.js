
// import * as yelpApi from "../../src/utilities/yelp-api"


// module.exports = {
//     searchBreweries,
//     getDetails,
//     getReviews
// }

// async function searchBreweries(req, res) {
//     try {
//         const location = req.query.location
//         const results = await searchBusinesses(location)
//         res.json(results)
//     } catch (err) {
//         console.log(er)

//     }
// }

// async function getDetails(req, res) {
//     try {
//         const businessId = res.params.id
//         const details = await getBusinessDetails(businessId)
//         res.json(details)
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function getReviews(req, res) {
//     try {
//         const businessId = req.params.id
//         const reviews = await getBusinessReviews(businessId)
//         res.json(reviews)
//     } catch (err) {
//         console.log(err)
//     }
// }