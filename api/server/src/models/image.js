module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    src: {
      type: DataTypes.TEXT,
    },
  });
  return Image;
};

/**
 * @swagger
 *  definitions:
 *      Image:
 *        type: object
 *        required:
 *          - title
 *          - description
 *        properties:
 *          title:
 *            type: string
 *          description:
 *            type: string
 *        example:
 *           title: an interesting title
 *           description: A memory
 *           src: https://imgur.com/s.jpg
 */
