import { Request, Response } from "express";
import * as dataBase from "../models/dataBase";
import { dataOlders, dataClient } from "../models/filtersData"

export const olders = (req: Request, res: Response) => {
    let query = req.query.id as string;
    let queryNumber: number = parseInt(query);

    if (queryNumber >= 1 && queryNumber <= dataBase.olders.length) {
        const showTrue = true

        let objOlder = dataOlders.getFromID(queryNumber);
        let clientId = objOlder?.customer_id as number;
        let objClient = dataClient.getFromID(clientId);

        let arraySend: older[] = objOlder?.products as older[];
        res.render('pages/olders', {
            showTrue,
            olders: objClient,
            test: dataOlders.getArrayOlders(arraySend)
        })
    } else {
        res.render('pages/olders', {

        })
    }



}


type older = {
    id: number,
    quantity: number
}

type showOlder = {
    name: string,
    price: number,
    quantity: number,
    total: number
}
