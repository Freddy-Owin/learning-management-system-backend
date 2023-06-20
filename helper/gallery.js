const fs = require('fs');
const uploadCv = (file) => {
    let fileName = new Date().valueOf()+"_"+file.name;
    file.mv(`./storage/cv/${fileName}`);
    return fileName;
}
const deleteCv = async(file) => {
    await fs.unlinkSync(`./storage/cv/${file}`);
}
const uploadCourseImage = (file) => {
    let fileName = new Date().valueOf()+"_"+file.name;
    file.mv(`./storage/images/courses/${fileName}`);
    return fileName;
}
const deleteCourseImage = async(file) => {
    await fs.unlinkSync(`./storage/images/courses/${file}`);
}
const uploadLessonFile = (file) => {
    let fileName = new Date().valueOf()+"_"+file.name;
    file.mv(`./storage/lessons/${fileName}`);
    return fileName;
}
const deleteLessonFile = async(file) => {
    await fs.unlinkSync(`./storage/lessons/${file}`);
}
const uploadProfile = (file) => {
    let fileName = new Date().valueOf()+"_"+file.name;
    file.mv(`./storage/images/profiles/${fileName}`);
    return fileName;
}
module.exports = {
    uploadCv,
    deleteCv,
    uploadCourseImage,
    deleteCourseImage,
    uploadLessonFile,
    deleteLessonFile,
    uploadProfile,
}