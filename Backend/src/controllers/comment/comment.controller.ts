import { Request, Response } from "express"
import { createCommentsService } from "../../services/comments/createComments.service";
import { listAnnouncementService } from "../../services/announcement/listAnnouncement.service";
import { listCommentService } from "../../services/comments/listComments.service";

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