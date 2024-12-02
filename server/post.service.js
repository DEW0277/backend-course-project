const postModel = require("../models/post.model");

class PostServices {
  async create(post) {
    const newPost = await postModel.create(post);
    return newPost;
  }
}

module.exports = new PostServices();
