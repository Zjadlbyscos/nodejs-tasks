import upload from "../config/multer";
const validateUpload = upload.single("avatar");
export default validateUpload