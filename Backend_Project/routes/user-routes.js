import  express  from "express";
import { getAllUser, login, signup} from "../controllers/user-controller";
import { tweet } from "../controllers/tweet-controller";
const router =express.Router();
router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login)
router.post("/tweet",tweet)
export default router