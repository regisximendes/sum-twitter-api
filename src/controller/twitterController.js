var Twitter = require('twitter');


module.exports.getUserTimeline = async (application, req, res) => {

    var client = new Twitter({
        consumer_key: 'QTeByt0VCAcmGiPcF7i8UtZMJ',
        consumer_secret: 'FAtruyopS4husKeSMM2wPGsoTcSpH8X2fhLtRYQUywKFr9mtN5',
        access_token_key: req.body.token,
        access_token_secret: req.body.secret
    });

    client.get('statuses/home_timeline', function (error, tweets, response) {

        if (!error) {
            return res.status(201).send(tweets)
        } else {
            return res.status(404).send({ message: 'tweets not found' })
        }
    });
}

module.exports.getUserHome = async (application, req, res) => {

    var client = new Twitter({
        consumer_key: 'QTeByt0VCAcmGiPcF7i8UtZMJ',
        consumer_secret: 'FAtruyopS4husKeSMM2wPGsoTcSpH8X2fhLtRYQUywKFr9mtN5',
        access_token_key: req.body.token,
        access_token_secret: req.body.secret
    });

    var params = {screen_name:  req.params.username};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {

       if (!error) {
            return res.status(201).send(tweets)
        } else {
            return res.status(404).send({ message: 'tweets not found' })
        }
    });
}

module.exports.search = async (application, req, res) => {

    var client = new Twitter({
        consumer_key: 'QTeByt0VCAcmGiPcF7i8UtZMJ',
        consumer_secret: 'FAtruyopS4husKeSMM2wPGsoTcSpH8X2fhLtRYQUywKFr9mtN5',
        access_token_key: req.body.token,
        access_token_secret: req.body.secret
    });

    var query = req.params.query
    client.get('search/tweets', {q: query}, function(error, tweets, response) {
        if (!error) {
            return res.status(201).send(tweets)
        } else {
            return res.status(404).send({ message: 'tweets not found' })
        }
     });
}


