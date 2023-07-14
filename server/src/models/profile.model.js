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
}

module.exports = ProfileModel;