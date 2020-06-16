module.exports = (application) => {

    application.get('/user/timeline', (req, res, next) => {
        application.src.controller.twitterController.getUserTimeline(application, req, res)
    });
}