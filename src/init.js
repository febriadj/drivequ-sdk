const fs = require('fs');
const nodepath = require('path');

/**
 * Global configuration initialization for DriveQu.
 * @param {String} param0.host - Host Name
 * @param {String} param0.accessKeyId - User Access Key ID
 */

module.exports = ({
  host = null,
  accessKeyId = null,
} = {}) => {
  const cfile = nodepath(__dirname, '../api/config.json');

  // read config.js file
  fs.readFile(cfile, 'utf8', (error0, content) => {
    const obj = JSON.parse(content);

    // set object value
    Object.assign(obj, { host, accessKeyId });
    // re-write file contents
    fs.writeFileSync(cfile, JSON.stringify(obj, null, 2));

    return true;
  });
};
