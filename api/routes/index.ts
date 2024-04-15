import { express } from "..";

const router = express.Router();

const emailRouter = require('./test.routes');

router.use('/test', emailRouter);

module.exports = router;