import { Router } from "express";
import * as pageController from "../controllers/pagesController"
import * as searchController from "../controllers/searchController"
import * as olderController from "../controllers/olderController"


const router = Router();

router.get('/', pageController.home);
router.get('/products', pageController.products);
router.get('/olders', olderController.olders);
router.get('/contacts', pageController.contacts);
router.get('/search', searchController.search);

export default router