import { log } from "console";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { annoucementRespSerializer } from "../../schemas/annoucement.serializer";

export const listAnnouncementService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.find({
    relations: {
      user: true,
      brand: true,
      model: true,
      year: true,
      fuel: true,
      images: true,
      comments: true,
    },
  });

  // const annoucementResp = await annoucementRespSerializer.validate(announcement, {
  //   stripUnknown: true
  // })

  return announcement;
};
