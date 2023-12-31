const { body } = require("express-validator");

exports.validate = (method) => {
    switch (method) {
        case "name": {
            return [
                body("name", "name doesn't exist").exists(),
                // body("last_name", "last_name doesn't exist").exists(),
                // body("email", "Invalid email").exists().isEmail(),
                // body("password", "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character").exists().isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
                // body("phone").optional().isInt(),
                // body("status").optional().isIn(["enabled", "disabled"]),
            ];
        }
        case "about": {
            return [
                body("about", "about doesn't exist").exists(),
                // body("last_name", "last_name doesn't exist").exists(),
                // body("email", "Invalid email").exists().isEmail(),
                // body("password", "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character").exists().isLength({ min: 8 }).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
                // body("phone").optional().isInt(),
                // body("status").optional().isIn(["enabled", "disabled"]),
            ];
        }
    }
};
