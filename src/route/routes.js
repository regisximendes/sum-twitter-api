module.exports = (application) => {

    application.get('/', (req, res, next) => {
        application.src.controller.twitterController.getUserTimeline(application, req, res)
    });
}