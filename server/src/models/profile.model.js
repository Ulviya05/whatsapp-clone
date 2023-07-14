const { db } = require("../services/db");

const ProfileModel = {
    getProfile: function (userId, callback) {
        return db.query(
            `SELECT name, about, photo
            FROM "profile"
            WHERE user_id=$1`,
            [userId],
            callback
        );
    },
    createProfile: function (userId, callback) {
        return db.query(
            `INSERT INTO profile
            (app_id, user_id, name, about, photo)
            VALUES
            ('public', $1, '', '', 'avatar.jpg')`,
            [userId],
            callback
        );
    },
    updateName: function(userId, name) {
        return db.query(
          `UPDATE "profile"
          SET name = $1
          WHERE user_id = $2`,
          [name, userId]
        );
    },
    updateAbout: function(userId, about) {
        return db.query(
          `UPDATE "profile"
          SET about = $1
          WHERE user_id = $2`,
          [about, userId]
        );
    },
    updatePhoto: function(userId, photo) {
        return db.query(
          `UPDATE "profile"
          SET photo = $1
          WHERE user_id = $2`,
          [photo, userId]
        );
    }
      
}

module.exports = ProfileModel;