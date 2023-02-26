import logo from '@/model/logo'
import dbConnect from '@/utils/dbConnect'

dbConnect()

export default async function (req, res) {
    const {method,query:{id}} = req

    // get post
    
    switch (method) {
        case 'PUT':
            try {
                const logos = await logo.findByIdAndUpdate(id,req.body)

                if (!logos) {
                    res.status(400).json({succes:false})
                }

                res.status(200).json(logos)
            } catch (error) {
                res.status(404).json({error : 'error bro'})
            }
            break;



            case 'DELETE':
                try {
                    const logos = await logo.deleteOne({_id:id})
                    res.status(200).json(logos)
                } catch (error) {
                    res.status(404).json({error : 'error '})
                }
                break;
    
        default:
            res.staus(404).json({error : 'error '})
            break;
    }
  }