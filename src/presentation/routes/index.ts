import express, { Router } from 'express';
import userRoutes from './userRoutes';
import eventsRoutes from './eventsRoutes';
import announcementsRoutes from './announcementsRoutes';

const router: Router = express.Router();

userRoutes(router);
eventsRoutes(router);
announcementsRoutes(router);

export default router;
