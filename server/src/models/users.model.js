const { db } = require("../services/db");

const UserModel = {
    getUserById: function (userId, callback) {
        return db.query(
            `SELECT *
            FROM "emailpassword_users"
            WHERE user_id=$1`,
            [userId],
            callback
        );
    },
    getUserByEmail: function (email, callback) {
        return db.query(
            `SELECT *
            FROM "emailpassword_users"
            WHERE email=$1`,
            [email],
            callback
        );
    }
}

module.exports = UserModel;