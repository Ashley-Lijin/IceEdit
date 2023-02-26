import ScoialMedia from '@/model/SocialMedia'
import dbConnect from '@/utils/dbConnect'

dbConnect()

export default async function (req, res) {
    const {method,query:{id}} = req

    // get post
    
    switch (method) {
        case 'PUT':
            try {
                const soc = await ScoialMedia.findByIdAndUpdate(id,req.body)

                if (!soc) {
                    res.status(400).json({succes:false})
                }

                res.status(200).json(soc)
            } catch (error) {
                res.status(404).json({error : 'error bro'})
            }
            break;



            case 'DELETE':
                try {
                    const soc = await ScoialMedia.deleteOne({_id:id})
                    res.status(200).json(soc)
                } catch (error) {
                    res.status(404).json({error : 'error '})
                }
                break;
    
        default:
            res.staus(404).json({error : 'error '})
            break;
    }
  }