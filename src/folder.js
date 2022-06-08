const axios = require('axios');
const fs = require('fs');
const nodepath = require('path');

const cfile = nodepath.join(__dirname, '../api/config.json');

exports.create = async ({
  name,
  description = '',
  location = '/',
} = {}) => {
  try {
    const init = JSON.parse(fs.readFileSync(cfile, 'utf8'));

    const request = await axios({
      method: 'POST',
      url: `${init.host}/api/folders`,
      headers: {
        Authorization: `Bearer ${init.accessKeyId}`,
      },
      data: {
        name,
        description,
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
      url: `${init.host}/api/folders`,
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
      url: `${init.host}/api/folders`,
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
