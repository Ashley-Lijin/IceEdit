import hero from '@/model/hero'
import dbConnect from '@/utils/dbConnect'

dbConnect()

export default async function (req, res) {
    const {method,query:{id}} = req

    // get post
    
    switch (method) {
        case 'PUT':
            try {
                const heros = await hero.findByIdAndUpdate(id,req.body)

                if (!heros) {
                    res.status(400).json({succes:false})
                }

                res.status(200).json(heros)
            } catch (error) {
                res.status(404).json({error : 'error bro'})
            }
            break;



            case 'DELETE':
                try {
                    const heros = await hero.deleteOne({_id:id})
                    res.status(200).json(heros)
                } catch (error) {
                    res.status(404).json({error : 'error '})
                }
                break;
    
        default:
            res.staus(404).json({error : 'error '})
            break;
    }
  }