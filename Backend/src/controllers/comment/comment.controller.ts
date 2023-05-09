import { Request, Response } from "express"
import { createCommentsService } from "../../services/comments/createComments.service";
import { listCommentService } from "../../services/comments/listComments.service";
import { updateCommentsService } from "../../services/comments/updateComments.service";
import { deleteCommentsService } from "../../services/comments/deleteComments.service";

export const listCommentsController = async (req: Request, res: Response) => {
    const announcementId: string = req.params.id
    const comments = await listCommentService(announcementId)
    return res.json(comments)
}

export const createCommentsController = async (req: Request, res: Response) => {

    const commentData = req.body
    const announcementId: string = req.params.id
    const userId = req.user.id
    const createComment = await createCommentsService({commentData, announcementId, userId})
    return res.status(200).json(createComment)
};

export const updateCommentsController = async (req: Request, res: Response) => {

    const commentData = req.body
    const commentId: string = req.params.id
    const createComment = await updateCommentsService(commentData, commentId)
    return res.status(200).json(createComment)
};

export const deleteCommentsController = async (req: Request, res: Response) => {

    const commentId: string = req.params.id
    await deleteCommentsService(commentId)
    return res.status(204).send();
}