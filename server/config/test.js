module.exports ={

    env: 'test',

    // Port from server or 4000
    port: process.env.PORT || 4000,

    // DB settings using mlab.com
    db: 'mongodb://test:test01@ds121593.mlab.com:21593/rock-paper-scissors-game-test',

    // Address that may request
    may_request_address: 'http://localhost:3000',



    // *** Game settings

    // Total rounds won to decide a winner
    total_rounds_won: 3,

    // Limit of statistics players
    statisticsLimit: 5

}