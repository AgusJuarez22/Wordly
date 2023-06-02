const {createActivity, getActivities} = require('../controllers/activitiesControllers')


const postActivitiesHandler = async (req,res) =>{
    const {name,difficulty,duration,season,country} = req.body
    try {
        response = await createActivity(name,difficulty,duration,season,country)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getActivitiesHandler = async (req,res) =>{
    try {
        const response = await getActivities()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

 module.exports = {
    postActivitiesHandler,
    getActivitiesHandler
 }