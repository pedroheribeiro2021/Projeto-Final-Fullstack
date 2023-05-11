import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Image } from "../../entities/image.entity";
import { IAnnouncementUpdate } from "../../interfaces/announcement.interfaces";
import { IImageUpdate } from "../../interfaces/announcement.interfaces";
import { In } from "typeorm";

export const updateAnnouncementService = async (
  updateData: IAnnouncementUpdate,
  id: string
): Promise<any> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const imageRepository = AppDataSource.getRepository(Image);

  const announcement = await announcementRepository.findOne({
    where: { id: id },
    relations: {
      brand: true,
      model: true,
      year: true,
      fuel: true,
      images: true,
    },
  });

  const updateDataImages = updateData.images;
  delete updateData.images;

  const updatedAnnouncement = announcementRepository.create({
    ...announcement,
    ...updateData,
  });
  await announcementRepository.save(updatedAnnouncement);

  const oldImages = announcement!.images;
  if (oldImages) {
    const imageIds = oldImages.map((image) => image.id);
    await imageRepository.delete({ id: In(imageIds) });
  }

  

  if (updateDataImages) {
    await Promise.all(
      updateDataImages.map(async (el: IImageUpdate, index: number) => {
        if (index == 0) {
          el.isCoverImage = true;
        }
        let image = imageRepository.create(el);
        image.announcement = updatedAnnouncement;
        await imageRepository.save(image);
      })
    );
  }

  const updatedAnnouncementResponse = await announcementRepository.findOne({
    where: { id: id },
    relations: {
      brand: true,
      model: true,
      year: true,
      fuel: true,
      images: true,
    },
  });
  return updatedAnnouncementResponse;
};
