import SoftwareHead from '@/model/Software-head'
import dbConnect from '@/utils/dbConnect'

dbConnect()

export default async function (req, res) {
    const {method,query:{id}} = req

    // get post
    
    switch (method) {
        case 'PUT':
            try {
                const softH = await SoftwareHead.findByIdAndUpdate(id,req.body)

                if (!softH) {
                    res.status(400).json({succes:false})
                }

                res.status(200).json(softH)
            } catch (error) {
                res.status(404).json({error : 'error bro'})
            }
            break;



            case 'DELETE':
                try {
                    const softH = await SoftwareHead.deleteOne({_id:id})
                    res.status(200).json(softH)
                } catch (error) {
                    res.status(404).json({error : 'error '})
                }
                break;
    
        default:
            res.staus(404).json({error : 'error '})
            break;
    }
  }