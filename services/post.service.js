const postModel = require('../models/post.model');
const fileService = require('./file.service');

class PostServices {
  async create(post, picture) {
    const fileName = fileService.save(picture);
    const newPost = await postModel.create({ ...post, picture: fileName });
    return newPost;
  }

  async delete(id) {
    const post = await postModel.findByIdAndDelete(id);
    return post;
  }

  async edit(post, id) {
    if (!id) {
      throw new Error('Id not Found');
    }

    const updatedData = await postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    return updatedData;
  }

  async getOne(id) {
    const post = await postModel.findById(id);
    return post;
  }
}

module.exports = new PostServices();
