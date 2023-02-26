import logo from '@/model/logo'
import dbConnect from '@/utils/dbConnect'

dbConnect()


export default async function (req, res) {
    const {method} = req

    // get post all
    switch (method) {
        case 'GET':
            try {
                const logos = await logo.find({})
                res.status(200).json(logos)
            } catch (error) {
                res.status(400).json({error : 'error 1 '})
            }
            break;

            // post a new item

            case 'POST':
                try {
                    const logos = await logo.create(req.body)
                    res.status(200).json(logos)
                } catch (error) {
                    res.status(400).json({error : 'error '})
                }
                break;
    
        default:
            res.status(400).json({error : 'error '})
            break;
    }
  }