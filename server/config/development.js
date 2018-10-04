module.exports ={

    env: 'development',

    // Port from server or 3001
    port: process.env.PORT || 3001,

    // DB settings using mlab.com
    db: 'mongodb://test:test01@ds121603.mlab.com:21603/rock-paper-scissors-game-development',

    // Address that may request
    may_request_address: 'http://localhost:3000',



    // *** Game settings

    // Total rounds won to decide a winner
    total_rounds_won: 3,

    // Limit of statistics players
    statisticsLimit: 5

}