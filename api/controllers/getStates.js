import { statesApi } from '../config/statesApi.js';

export const getStates = (req, res)=>{
    res.status(200).json({ status: true, data: statesApi })
}