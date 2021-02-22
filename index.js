let arc = require('@architect/functions')
exports.handler = arc.http.async(r=> ({ req: r }))
