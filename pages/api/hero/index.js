import navbar from '@/model/navbar'
import dbConnect from '@/utils/dbConnect'

dbConnect()


export default async function (req, res) {
    const {method} = req

    // get post all
    switch (method) {
        case 'GET':
            try {
                const nav = await navbar.find({})
                res.status(200).json(nav)
            } catch (error) {
                res.status(404).json({error : 'error 1 '})
            }
            break;

            // post a new item

            case 'POST':
                try {
                    const nav = await navbar.create(req.body)
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