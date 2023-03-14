import { Request, Response } from "express";
import { dataProduct } from "../models/filtersData"

export const home = (req: Request, res: Response) => {
    res.render('pages/home')
}

export const products = (req: Request, res: Response) => {

    res.render('pages/products', {
        productsShow: dataProduct.getAll()
    })
}
export const contacts = (req: Request, res: Response) => {
    res.render('pages/contacts')
};