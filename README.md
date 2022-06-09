# DriveQu SDK
By using open source SDK ⚙️ ️it allows you to connect & explore paid storage manager **DriveQu** via other apps (cross app). You can visit https://drivequ.herokuapp.com for trial use & get experience as a file explorer 🤠 in a restricted environment.

# Table of Contents
- [Installation](#installation)
- [Usage 📋](#usage-📋)
  - [Set up your global config](#set-up-your-global-config)
  - [Work with your files 📑](#work-with-your-files-📑)
  - [Work with your folders 📁](#work-with-your-folders-📁)
- [Contributing](#contributing)
- [License 📄](#license-📄)
- [Support Us 🤝](#support-us-🤝)

# Installation
Install using npm
~~~shell
$ npm i -S drivequ
~~~
... Or using yarn
~~~shell
$ yarn add drivequ
~~~

# Usage 📋
~~~js
// commonjs
const drivequ = require('drivequ');

// es modules
import drivequ from 'drivequ';
~~~

## Set up Your Global Config
By purchasing our product, you can use your own `host` address.
~~~js
drivequ.init({
  host: 'https://drivequ.herokuapp.com',
  accessKeyId: '{access-key-id}',
});
~~~

## Work With Your Files 📑
### Upload file
By default, the files upload `location` will be directed to the **root folder**.

You can upload files into the folder by filling in the `location` based on the url of the folder you want to go to (*Also applies to folders*).
~~~js
// single upload
await drivequ.file.upload({
  file: req.file,
  location: '/',
});
~~~
~~~js
// multiples upload
await drivequ.file.upload({
  files: req.file,
  location: '/74487546-8574-40d5-8986...',
}, {
  multiples : true,
});
~~~

### Find Files
Junk files are placed separately from other files (*Also applies to folders*).
~~~js
await drivequ.file.find({
  location: '/',
  trashed: false,
});
~~~

### Delete Files
The `delete` method requires an array parameter containing the `id` of the files you want to delete.
~~~js
await drivequ.file.delete(['6267f14cc458...']);
~~~

## Work With Your Folders 📁
### Create new folder
Folder name is unique if the location is the same.
~~~js
await drivequ.folder.create({
  name: 'Folder Name',
  description: 'A description of your folder',
  location: '/',
});
~~~

### Find folders
~~~js
await drivequ.folder.find({
  location: '/5a462358-8881-42e1-83eb...',
});
~~~

### Delete folders
The `delete` method requires an array parameter containing the `id` of the folder you want to delete.
~~~js
await drivequ.folder.delete(['6265c71a08f8...']);
~~~

# Contributing
Contributions make the open source community a great place to learn, inspire and create. I really appreciate every contribution you make.

If you have any suggestions that would make this even better, please fork this repo and pull request. You can also open an issue on this project and don't forget to give this project a star. Thank you.

- Fork this project
- Create a new branch - `git checkout -b branchName`
- Commit your changes - `git commit -m "Add new features"`
- Push to your branch - `git push origin branchName`
- Submit a pull request

# License 📄
Distributed under the GPL-3.0 License. See [LICENSE.txt](https://github.com/febriadj/drivequ-sdk/blob/master/LICENSE) for more information.

# Support Us 🤝
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/febriadj)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/febriadji)