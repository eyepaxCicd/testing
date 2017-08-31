var path = require('path');

module.exports = {
  'config': path.resolve('./db', 'config.json'),
  'migrations-path': path.resolve('./db', 'migrations'),
  'models-path': path.resolve('./db', 'models'),
  'seeders-path': path.resolve('./db', 'seeders')
}
