import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";


export const updateCommentsService = async (
    updateData: any, 
    // userId: string,
    // announcementId: string,
    commentId: string
): Promise<any> => {

  const commentRepository = AppDataSource.getRepository(Comment);
  
  const comment = await commentRepository.findOne({
    where: [{ id: commentId }],
  });

  if (!comment) {
    throw new Error('Comentário não encontrado');
  }

  const updatedComment = commentRepository.create({
    ...comment,
    ... updateData,
  });

  await commentRepository.save(updatedComment);

  return updatedComment
}