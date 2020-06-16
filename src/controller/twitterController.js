var Twitter = require('twitter');

module.exports.getUserTimeline = async (application, req, res) => {

    var client = new Twitter({
        consumer_key: 'QTeByt0VCAcmGiPcF7i8UtZMJ',
        consumer_secret: 'FAtruyopS4husKeSMM2wPGsoTcSpH8X2fhLtRYQUywKFr9mtN5',
        access_token_key: '1249872483915911168-t2x8lSoXK38oGDct32wfKDEPz3Lc1I',
        access_token_secret: 'NalRG2jxD0434wod699HRLuEaNtv5zBMzXFZWfn1YGS4t'
    });

    var params = { screen_name: 'nodejs' };
    client.get('statuses/home_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

module.exports.getUserById = async (application, req, res) => {

    const repository = application.src.repository.userRepository;
    try {
        const user = await repository.getUserById({
            userId: req.body.userId
        });

        if (user) {
            return res.status(201).send(user)
        }
        else {
            return res.status(404).send({ message: 'User not found' })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: 'Server Error',
            error: error
        })
    }
}
