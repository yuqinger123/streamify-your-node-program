var Stream = require('stream')

var source = ['a', '', 'c']
var readable = Stream.Readable({
  objectMode: true,
  read: function () {
    var data = source.shift()
    data = data == null ? null : data
    this.push(data)
  },
})

readable.on('end', function () {
  console.log('end')
})

readable.on('data', function (data) {
  console.log('data', data)
})

