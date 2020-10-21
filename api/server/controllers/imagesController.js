import uuidValidate from 'uuid-validate';
import ImageService from '../services/ImageServices';
import ResStatus from '../utils/ResStatus';

const resStatus = new ResStatus();

class ImageController {
  static async getAllImages(req, res) {
    try {
      const allImages = await ImageService.getAllImages();
      if (allImages.length > 0) {
        resStatus.setSuccess(200, 'Images retrieved', allImages);
      } else {
        resStatus.setSuccess(200, 'No Image found');
      }
      return resStatus.send(res);
    } catch (error) {
      resStatus.setError(400, error);
      return resStatus.send(res);
    }
  }

  static async addImage(req, res) {
    const newImage = req.body;
    try {
      const createdImage = await ImageService.addImage(newImage);
      resStatus.setSuccess(201, 'Image Added!', createdImage);
      return resStatus.send(res);
    } catch (error) {
      if (error.message === 'Validation error') {
        resStatus.setError(400, `Duplicate Image title found: ${newImage.title}`);
        return resStatus.send(res);
      }
      resStatus.setError(400, error.message);
      return resStatus.send(res);
    }
  }

  static async getAnImage(req, res) {
    const { id } = req.params;
    if (!uuidValidate(id)) {
      resStatus.setError(400, 'invalid id param provided');
      return resStatus.send(res);
    }
    try {
      const theImage = await ImageService.getAnImage(id);

      if (!theImage) {
        resStatus.setError(404, `Cannot find Image with the id ${id}`);
      } else {
        resStatus.setSuccess(200, 'Found Image', theImage);
      }
      return resStatus.send(res);
    } catch (error) {
      resStatus.setError(404, error);
      return resStatus.send(res);
    }
  }

  static async updatedImage(req, res) {
    const alteredImage = req.body;
    const { id } = req.params;

    try {
      if (!uuidValidate(id)) {
        resStatus.setError(400, 'invalid id param provided');
        return resStatus.send(res);
      }
      const updateImage = await ImageService.updateImage(id, alteredImage);
      if (!updateImage) {
        resStatus.setError(404, `Cannot find Image with the id: ${id}`);
      } else {
        resStatus.setSuccess(200, 'Image updated', updateImage);
      }
      return resStatus.send(res);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        resStatus.setError(400, `Duplicate Image title found: ${alteredImage.title}`);
        return resStatus.send(res);
      }
      resStatus.setError(400, error);
      return resStatus.send(res);
    }
  }

  static async deleteImage(req, res) {
    const { id } = req.params;

    try {
      if (!uuidValidate(id)) {
        resStatus.setError(400, 'invalid id param provided');
        return resStatus.send(res);
      }
      const ImageToDelete = await ImageService.deleteImage(id);
      if (ImageToDelete) {
        resStatus.setSuccess(200, 'Image deleted');
      } else {
        resStatus.setError(404, `Image with the id ${id} cannot be found`);
      }
      return resStatus.send(res);
    } catch (error) {
      resStatus.setError(400, error);
      return resStatus.send(res);
    }
  }
}

export default ImageController;
