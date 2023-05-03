import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";

export const createCommentsService = async ({commentData, announcementId, userId}: any) : Promise<any> => {

  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = commentRepository.create({
    user: userId,
    description: commentData.description,
    announcement: announcementId
  })

  await commentRepository.save(comment)

  return comment
}