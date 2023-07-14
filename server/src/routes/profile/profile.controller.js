const UserModel = require("../../models/users.model");

async function updateName(req, res) {
    try {
        // Get user input
        const { name } = req.body;
        let userId = req.session.getUserId();
        console.log(userId)

        // check if user already exist
        const user = (await UserModel.getUserByEmail(name)).rows[0];

        res.status(200).json(userId);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    updateName
};
