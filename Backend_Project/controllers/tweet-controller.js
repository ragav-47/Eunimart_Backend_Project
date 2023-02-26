import Tweets from "../model/Tweet";
export const tweet=async(req,res,next)=>{
    const { UserID, Tweet }=req.body;
    const save_tweet=new Tweets({
        UserID,
        Tweet,
    });
    try{
        await save_tweet.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(200).json({message:"Tweet Updated"});
}

