const Contect = require("../model/Contect"); 

// Get All Conntect
const contect_all = async (req , res)=>{
        try {
            const contectsdetails = await Contect.find();
            res.json(contectsdetails);
        } catch (error) {
            res.json({ message: error })
        }
}; 


// Add new connect detalis
const create_contect =  async (req,res) =>{
        const contect = new Contect({
            name:req.body.name,
            emaill:req.body.emaill,
            number:req.body.number,
            budget:req.body.budget,
            message:req.body.message,
        })
        if(req.files){
            contect.filepath = "uploads/"+ req.files[0]?.filename 
        }
        
    try {
        const savedContect = await contect.save();
        res.send(savedContect)
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    contect_all,
    create_contect
}