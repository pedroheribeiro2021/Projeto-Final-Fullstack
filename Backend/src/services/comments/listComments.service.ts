import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listCommentService = async (announcementId:string):Promise<any[]> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

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

  return comment
};