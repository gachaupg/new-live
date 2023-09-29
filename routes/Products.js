import express from "express";
import  { createUser,RemoveLike,Addlikes,Adddislikes,RemovedisLike, 
    deleteUserContent, getAllUserContents, getContentsByUser, getSingleUserContent, updateUserContent, Addsubscribers, Addissubscribers, Removesubscriber, Removedissubscriber, viewsUserContent, UserContentPlayList, RandomProducts } from '../controllers/Products.js'
const router = express.Router();

router.post("/", createUser);
router.get("/all-users-contents", getAllUserContents);
router.get("/", RandomProducts);
router.get("/:id", getSingleUserContent);
router.get("/users-own-content/:id", getContentsByUser);
router.delete("/delete-user-content/:id", deleteUserContent);
router.patch("/update-user-content/:id", updateUserContent);
router.patch("/user-contentlikes/:id",Addlikes);
router.patch("/user-contentremovelikes/:id",RemoveLike);
router.patch("/user-contentdislikes/:id",Adddislikes);
router.patch("/user-contentremovedislikes/:id",RemovedisLike);
router.patch("/user-contentsubscribers/:id",Addsubscribers);
router.patch("/user-contentremovesubscribers/:id",Removesubscriber);
router.patch("/user-contentremovedissubscribers/:id",Removedissubscriber);
router.patch("/user-contentdissubscriber/:id",Addissubscribers);
router.put('/views/:videoId', viewsUserContent);
router.put('/playlist/:videoId', UserContentPlayList);



export default router