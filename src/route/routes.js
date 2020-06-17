module.exports = (application) => {

    application.post('/user/timeline', (req, res, next) => {
        application.src.controller.twitterController.getUserTimeline(application, req, res)
    });

    application.post('/user/home/:username', (req, res, next) => {
        application.src.controller.twitterController.getUserHome(application, req, res)
    });

    application.post('/search/:query', (req, res, next) => {
        application.src.controller.twitterController.search(application, req, res)
    });
}