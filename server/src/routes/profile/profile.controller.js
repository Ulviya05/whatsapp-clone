const ProfileModel = require("../../models/profile.model");
const UserModel = require("../../models/users.model");

async function getProfile(req, res) {
    try {
        const userId = req.session.getUserId();

        const profile = (await ProfileModel.getProfile(userId)).rows[0];

        res.status(200).json(profile);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

async function updateName(req, res) {
    try {
        // Get user input
        const { name } = req.body;
        const userId = req.session.getUserId();

        // check if user already exist
        const profile = (await ProfileModel.getProfile(userId)).rows[0];

        res.status(200).json(profile);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getProfile,
    updateName
};
