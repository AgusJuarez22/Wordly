const {Router} = require("express")
const activitiesRouter = Router()
const { postActivitiesHandler, getActivitiesHandler } = require('../handlers/activitiesHandler')


activitiesRouter.post('/',postActivitiesHandler)
activitiesRouter.get('/',getActivitiesHandler)


module.exports = activitiesRouter