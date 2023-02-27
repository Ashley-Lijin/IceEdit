import SoftwareHead from '@/model/Software-head'
import dbConnect from '@/utils/dbConnect'

dbConnect()


export default async function (req, res) {
    const {method} = req

    // get post all
    switch (method) {
        case 'GET':
            try {
                const softH = await SoftwareHead.find({})
                res.status(200).json(softH)
            } catch (error) {
                res.status(400).json({error : 'error 1 '})
            }
            break;

            // post a new item

            case 'POST':
                try {
                    const softH = await SoftwareHead.create(req.body)
                    res.status(200).json(softH)
                } catch (error) {
                    res.status(400).json({error : 'error '})
                }
                break;
    
        default:
            res.status(400).json({error : 'error '})
            break;
    }
  }