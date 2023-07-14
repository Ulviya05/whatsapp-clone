const ProfileModel = require("../../models/profile.model");
const UserModel = require("../../models/users.model");
const fs = require('fs');
var crypto = require('crypto');

async function getProfile(req, res) {
    try {
        const userId = req.session.getUserId();

        const profile = (await ProfileModel.getProfile(userId)).rows[0];

        if(!profile) {
            await ProfileModel.createProfile(userId);
        }

        res.status(200).json(profile);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

async function updateName(req, res) {
    try {

      const { name } = req.body;
      const userId = req.session.getUserId();

      await ProfileModel.updateName(userId, name);
  
      const updatedProfile = (await ProfileModel.getProfile(userId)).rows[0];
  
      res.status(200).json(updatedProfile);
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }  

  async function updateAbout(req, res) {
    try {

      const { about } = req.body;
      const userId = req.session.getUserId();

      await ProfileModel.updateAbout(userId, about);
  
      const updatedProfile = (await ProfileModel.getProfile(userId)).rows[0];
  
      res.status(200).json(updatedProfile);
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }  
  async function updatePhoto(req, res) {
    try {
        let photo = req.files.photo

      const userId = req.session.getUserId();
  
      const emailHash = crypto.createHash('md5').update(userId).digest('hex');
      const photoName = `${emailHash}_${photo.name}`;
  
      photo.mv('./uploads/' + photoName);

      await ProfileModel.updatePhoto(userId, photoName);
  
      const updatedProfile = (await ProfileModel.getProfile(userId)).rows[0];
  
      res.status(200).json(updatedProfile);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  
  }
  

module.exports = {
    getProfile,
    updateName,
    updateAbout,
    updatePhoto
};
