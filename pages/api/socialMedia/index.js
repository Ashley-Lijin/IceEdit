import ScoialMedia from '@/model/SocialMedia'
import dbConnect from '@/utils/dbConnect'

dbConnect()


export default async function (req, res) {
    const {method} = req

    // get post all
    switch (method) {
        case 'GET':
            try {
                const soc = await ScoialMedia.find({})
                res.status(200).json(soc)
            } catch (error) {
                res.status(400).json({error : 'error 1 '})
            }
            break;

            // post a new item

            case 'POST':
                try {
                    const soc = await ScoialMedia.create(req.body)
                    res.status(200).json(soc)
                } catch (error) {
                    res.status(400).json({error : 'error '})
                }
                break;
    
        default:
            res.status(400).json({error : 'error '})
            break;
    }
  }