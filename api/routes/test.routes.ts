import { express } from "..";

const router = express.Router();

// const controller = require("../controllers/email.controller");

router.get("/", (res, req)=>{
  return res.send("Hello from the test route");
});

module.exports = router;