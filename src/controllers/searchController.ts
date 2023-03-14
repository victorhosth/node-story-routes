import { Request, Response } from "express";
import { dataProduct } from "../models/filtersData"

export const search = (req: Request, res: Response) => {
    let query: string = req.query.find as string;

    res.render('pages/search', {
        query,
        productsShow: dataProduct.getFromName(query)
    })
}
