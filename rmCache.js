const fsExtra = require('fs-extra');
const fileDir = '/etc/nginx/cache/apkgara.com';
fsExtra.emptyDirSync(fileDir);
console.log('removed nginx cache files');
