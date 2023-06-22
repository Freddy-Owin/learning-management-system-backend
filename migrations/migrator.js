const fs = require("fs");
const collection = require("./collections");
const writeFile = async(file, data) =>  fs.writeFileSync(file, JSON.stringify(data));
const readFile = async(file) => JSON.parse(fs.readFileSync(file, "utf-8"));
const storage = (file) => `./migrations/backups/${file}.json`;
const migrator = {
    backup : async (collection, file) => {
        await writeFile(storage(file), await collection.find());
    },
    migrate : async (collection, file) => {
        await collection.insertMany(await readFile(storage(file)));
    }
}
const backup = async () => {
    await migrator.backup(collection.user, "users");
    await migrator.backup(collection.role, "roles");
    await migrator.backup(collection.course, "courses");
    await migrator.backup(collection.application, "applications");
    await migrator.backup(collection.user, "users");
    await migrator.backup(collection.career, "careers");
    await migrator.backup(collection.enrollment, "enrollments");
    await migrator.backup(collection.student, "students");
    await migrator.backup(collection.batch, "batches");
    await migrator.backup(collection.week, "weeks");
    await migrator.backup(collection.lesson, "lessons");
    await migrator.backup(collection.access_token, "access_tokens");
}
const migrate = async () => {
    await migrator.migrate(collection.user, "users");
    await migrator.migrate(collection.role, "roles");
    await migrator.migrate(collection.course, "courses");
    await migrator.migrate(collection.application, "applications");
    await migrator.migrate(collection.user, "users");
    await migrator.migrate(collection.career, "careers");
    await migrator.migrate(collection.enrollment, "enrollments");
    await migrator.migrate(collection.student, "students");
    await migrator.migrate(collection.batch, "batches");
    await migrator.migrate(collection.week, "weeks");
    await migrator.migrate(collection.lesson, "lessons");
    await migrator.migrate(collection.access_token, "access_tokens");
}
module.exports = {
    backup,
    migrate
};