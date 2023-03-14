import { Request, Response } from "express";
import { dataOlders, dataClient } from "../models/filtersData"

export const olders = (req: Request, res: Response) => {
    let query = req.query.id as string;
    let queryNumber: number = parseInt(query);
    let objOlder = dataOlders.getFromID(queryNumber);
    let clientId = objOlder?.customer_id as number;
    let objClient = dataClient.getFromID(clientId);

    let arraySend: older[] = objOlder?.products as older[];

    res.render('pages/olders', {
        olders: objClient,
        test: dataOlders.getArrayOlders(arraySend)
    })
}


type older = {
    id: number,
    quantity: number
}
