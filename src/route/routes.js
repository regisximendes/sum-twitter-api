module.exports = (application) => {

    application.get('/user/timeline', (req, res, next) => {
        application.src.controller.twitterController.getUserTimeline(application, req, res)
    });

    application.get('/user/home/:username', (req, res, next) => {
        application.src.controller.twitterController.getUserHome(application, req, res)
    });

    application.get('/search/:query', (req, res, next) => {
        application.src.controller.twitterController.search(application, req, res)
    });
}