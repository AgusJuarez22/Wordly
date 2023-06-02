const {Country, Activity} = require('../db')


const createActivity = async (name,difficulty,duration,season,country) =>{
    if(!name || !difficulty || !season){throw Error('Missing data')}
    const newActivity = await Activity.create({name,difficulty,duration,season,country})
    await newActivity.addCountry(country)
    return "Everything was submitted correctly."
}

const getActivities = async () =>{
    let activities = await Activity.findAll()
    return activities
}

module.exports = {
    createActivity,
    getActivities
}