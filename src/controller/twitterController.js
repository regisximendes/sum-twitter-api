var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'QTeByt0VCAcmGiPcF7i8UtZMJ',
    consumer_secret: 'FAtruyopS4husKeSMM2wPGsoTcSpH8X2fhLtRYQUywKFr9mtN5',
    access_token_key: '1249872483915911168-t2x8lSoXK38oGDct32wfKDEPz3Lc1I',
    access_token_secret: 'NalRG2jxD0434wod699HRLuEaNtv5zBMzXFZWfn1YGS4t'
});

module.exports.getUserTimeline = async (application, req, res) => {

    client.get('statuses/home_timeline', function (error, tweets, response) {

        if (!error) {
            return res.status(201).send(tweets)
        } else {
            return res.status(404).send({ message: 'tweets not found' })
        }
    });
}

module.exports.getUserHome = async (application, req, res) => {

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

    var query = req.params.query
    client.get('search/tweets', {q: query}, function(error, tweets, response) {
        if (!error) {
            return res.status(201).send(tweets)
        } else {
            return res.status(404).send({ message: 'tweets not found' })
        }
     });
}


