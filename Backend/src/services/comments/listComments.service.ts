import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { commentReturnedSerializer } from "../../schemas/comment.serializer";

export const listCommentService = async (announcementId:string):Promise<any[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  // const commentRepository = AppDataSource.getRepository(Comment);


  const comment = await announcementRepository.find({
    where: {
      id: announcementId,
    },
    relations: {
      images: true,
      brand: true,
      model: true,
      year: true,
      fuel: true,
      user: true,
      comments: {
        user: true
      }
    }
  });

  // const comment = await commentRepository.find({
    // where: {
    //   id: announcementId,
    // },
    // relations: {
    //   user: true,
    //   comments: true,
    // }
  // });

  return comment

  // const comments = commentReturnedSerializer.validate(comment, {
  //   stripUnknown: true
  // })

  // return comments
};