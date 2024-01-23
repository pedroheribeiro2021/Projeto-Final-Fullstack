import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";


export const deleteCommentsService = async (commentId: string) => {

    const commentRepository = AppDataSource.getRepository(Comment);
  
    const comment = await commentRepository.findOne({
      where: [{ id: commentId }],
    });
  
    if (!comment) {
      throw new Error('Comentário não encontrado');
    }

  await commentRepository.remove(comment!);
}