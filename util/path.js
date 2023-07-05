const path = require('path');

// This is for using Rootdir an alternative of __dirname which in this case is not being used
module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);