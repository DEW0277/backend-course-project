const postModel = require('../models/post.model');
const postService = require('../services/post.service');

class PostController {
  async getAll(req, res) {
    try {
      const allPost = await postModel.find();
      res.status(201).json(allPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async create(req, res) {
    try {
      const post = await postService.create(req.body, req.files.picture);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async edit(req, res) {
    try {
      const { body, params } = req;
      const post = postService.edit(body, params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
