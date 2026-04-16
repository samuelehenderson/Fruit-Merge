const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', function() {
  console.log('');
  console.log('🍉 Fruit Merge is running on port ' + PORT + '!');
  console.log('');
  var interfaces = os.networkInterfaces();
  for (var name in interfaces) {
    var addrs = interfaces[name];
    for (var i = 0; i < addrs.length; i++) {
      if (addrs[i].family === 'IPv4' && !addrs[i].internal) {
        console.log('📱 On your phone, go to: http://' + addrs[i].address + ':' + PORT);
      }
    }
  }
  console.log('');
  console.log('Press Ctrl+C to stop.');
});
