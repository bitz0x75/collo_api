import uuidValidate from 'uuid-validate';

import database from '../src/models';

/* eslint-disable */
class ImageService {
  static async getAllImages() {
    try {
      return await database.Image.findAll();
    } catch (error) {
      throw error;
    }
  }
  
  static async getAnImage(id) {
    const is_uuid = uuidValidate(id);
    is_uuid ? id : id = NaN;
    try {
      const theImage = await database.Image.findOne({
        where: { id }
      });

      return theImage;
    } catch (error) {
      throw error;
    }
  }

  static async addImage(newImage) {
    try {
      return await database.Image.create(newImage);
    } catch (error) {
      throw error;
    }
  }
  
  static async updateImage(id, updateImage) {
    try {
      const ImageToUpdate = await database.Image.findOne({
        where: { id: id }
      });

      if (ImageToUpdate) {
        await database.Image.update(updateImage, { where: { id: id } });

        return updateImage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteImage(id) {
    const is_uuid = uuidValidate(id);
    is_uuid ? id : id = NaN;
    try {
      const ImageToDelete = await database.Image.findOne({ where: { id } });

      if (ImageToDelete) {
        const deletedImage = await database.Image.destroy({
          where: { id }
        });
        return deletedImage;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ImageService;