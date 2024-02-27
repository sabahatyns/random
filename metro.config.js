const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const blacklist = require('metro-config/src/defaults/exclusionList');
module.exports = {
    resolver: {
      blacklistRE: blacklist([
        /ios\/Pods\/JitsiMeetSDK\/Frameworks\/JitsiMeet.framework\/assets\/node_modules\/react-native\/.*/,
      ]),
    },
  };

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
