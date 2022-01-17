const path   = require("path");
const multer = require("multer");

const storage = multer.diskStorage({

    // destination for files
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    // add back the extension
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext);
    }

})

// upload parameters for multer
const upload = multer({
    storage: storage
});

module.exports = upload;