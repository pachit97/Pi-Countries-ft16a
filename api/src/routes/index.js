const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries = require('./Countries.js')
const Activities = require('./Activities.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', Countries)
router.use('/activities', Activities)

module.exports = router;