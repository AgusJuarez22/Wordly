const { Router } = require('express');
const countriesRouter = require('./countriesRouter')
const activitiesRoute = require('./activitiesRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries',countriesRouter)
router.use('/activities',activitiesRoute)

module.exports = router;
