const axios = require('axios');
const fs = require('fs');
const nodepath = require('path');

const cfile = nodepath.join(__dirname, '../api/config.json');

exports.upload = async (
  {
    location = '/',
    file = null,
    files = null,
  } = {},
  {
    multiples = false,
  } = {},
) => {
  try {
    const init = JSON.parse(fs.readFileSync(cfile, 'utf8'));

    if ((multiples && !files && file) || (!multiples && !file && files)) {
      const newError = {
        message: `${multiples ? 'Files' : 'File'} is required`,
      };
      throw newError;
    }

    if ((!multiples && Array.isArray(file)) || (multiples && !Array.isArray(files))) {
      const newError = {
        message: 'The data type used does not match',
      };
      throw newError;
    }

    const request = await axios({
      method: 'post',
      url: `${init.host}/api/documents`,
      headers: {
        Authorization: `Bearer ${init.accessKeyId}`,
      },
      params: {
        multiples: multiples ? 1 : 0,
      },
      data: {
        [multiples ? 'files' : 'file']: multiples ? files : file,
        location,
      },
    });

    return request.data;
  }
  catch (error0) {
    const { response = null } = error0;

    const result = response ? response.data : error0;
    console.log(new Error(result.message));

    return result;
  }
};

exports.find = async (args = {}) => {
  try {
    const init = JSON.parse(fs.readFileSync(cfile, 'utf8'));

    const request = await axios({
      method: 'GET',
      url: `${init.host}/api/documents`,
      headers: {
        Authorization: `Bearer ${init.accessKeyId}`,
      },
      params: args,
    });

    return request.data;
  }
  catch (error0) {
    const { response = null } = error0;

    const result = response ? response.data : error0;
    console.log(new Error(result.message));

    return result;
  }
};

exports.delete = async (args = []) => {
  try {
    const init = JSON.parse(fs.readFileSync(cfile, 'utf8'));

    const request = await axios({
      method: 'DELETE',
      url: `${init.host}/api/documents`,
      headers: {
        Authorization: `Bearer ${init.accessKeyId}`,
      },
      data: args,
    });

    return request.data;
  }
  catch (error0) {
    const { response = null } = error0;

    const result = response ? response.data : error0;
    console.log(new Error(result.message));

    return result;
  }
};
