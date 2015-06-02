const http = require('http')
const fs = require('fs')

module.exports = {
  start: function (port) {
    http.createServer(function (req, res) {
      fs.createReadStream('./public/index.html')
        .pipe(res)
    })
    .listen(port, function () {
      console.log(`server is runing at http://localhost:${port}`)
    })
  },

  blastOff: function (port) {
    this.start(port)
  }
}
