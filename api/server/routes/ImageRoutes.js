import { Router } from 'express';
import ImageController from '../controllers/imagesController';

const router = Router();

/**
 * @swagger
 * /api/v1/image:
 *    post:
 *      tags:
 *          - Image
 *      name: Add a Image
 *      summary: This should add an Image
 *      description: Add an Image to the database
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      parameters:
 *        - name : body
 *          in: body
 *          schema:
 *            $ref: '#/definitions/Image'
 *            type: object
 *            required:
 *              - title
 *              - description
 *              - image
 *      responses:
 *        201:
 *          description: Image was added successfully
 */
router.post('/image', ImageController.addImage);

/**
 * @swagger
 * /api/v1/image:
 *    get:
 *      tags:
 *          - Image
 *      name: Get All Images
 *      summary: This should get all Images
 *      description: should get all Images
 *      consumes:
 *        - application/json
 *
 *      responses:
 *        200:
 *          description: Gets all Images
 */
router.get('/image', ImageController.getAllImages);

/**
 * @swagger
 * /api/v1/image/{id}:
 *    get:
 *      tags:
 *          - Image
 *      name: Get One Image
 *      summary: This should get a Image
 *      description: Get one Image
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: Image id
 *          in: path
 *          require: true
 *          type: string
 *      responses:
 *        200:
 *          description: Get one Image
 *          schema:
 *            $ref: '#/definitions/Image'
 *        404:
 *          description: Image not found
 */
router.get('/image/:id', ImageController.getAnImage);

/**
 * @swagger
 * /api/v1/image/{id}:
 *    put:
 *      tags:
 *          - Image
 *      name: Update Image
 *      summary: This should update a Image
 *      description: Update Image information
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: Image id
 *          in: path
 *          require: true
 *          type: string
 *        - name : body
 *          in: body
 *          schema:
 *            $ref: '#/definitions/Image'
 *            type: object
 *      responses:
 *        200:
 *          description: Image was updated successfully
 *        404:
 *          description: Image not found
 */
router.put('/image/:id', ImageController.updatedImage);

/**
 * @swagger
 * /api/v1/image/{id}:
 *    delete:
 *      tags:
 *          - Image
 *      name: Delete Image
 *      summary: Delete Image
 *      description: Delete all Image information
 *      consumes:
 *        - application/json
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: Image id
 *          in: path
 *          require: true
 *          type: string
 *      responses:
 *        200:
 *          description: Image deleted successfully
 *        404:
 *          description: Image not found
 */
router.delete('/image/:id', ImageController.deleteImage);

export default router;
