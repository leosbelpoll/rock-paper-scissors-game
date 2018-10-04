module.exports ={

    env: 'production',

    // Port from server or 3001
    port: process.env.PORT || 3001,

    // DB settings using mlab.com
    db: process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://test:test01@ds031571.mlab.com:31571/rock-paper-scissors-game',

    // Address that may request
    may_request_address: 'http://localhost:3000',



    // *** Game settings

    // Total rounds won to decide a winner
    total_rounds_won: 3,

    // Limit of statistics players
    statisticsLimit: 5

}