import navbar from '@/model/navbar'
import dbConnect from '@/utils/dbConnect'

dbConnect()

export default async function (req, res) {
    const {method,query:{id}} = req

    // get post
    
    switch (method) {
        case 'PUT':
            try {
                const nav = await navbar.findByIdAndUpdate(id,req.body)

                if (!nav) {
                    res.status(400).json({succes:false})
                }

                res.status(200).json(nav)
            } catch (error) {
                res.status(404).json({error : 'error bro'})
            }
            break;



            case 'DELETE':
                try {
                    const nav = await navbar.deleteOne({_id:id})
                    res.status(200).json(nav)
                } catch (error) {
                    res.status(404).json({error : 'error '})
                }
                break;
    
        default:
            res.staus(404).json({error : 'error '})
            break;
    }
  }