exports.createNewGame = function (userSessionId) {
    return {
        id: 1,
        status: 'new',
        host: userSessionId,
        players: [userSessionId],
        location: null,
        spy: null,
        resolution: null
    };
};