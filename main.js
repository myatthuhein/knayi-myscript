const globalOptions = require('./library/globalOptions')
const fontDetect = require('./library/detector')
const fontConvert = require('./library/converter')
const syllBreak = require('./library/syllBreak')
const spellingFix = require('./library/spellingCheck')

const {version} = require('./package.json')

module.exports = {
	version,
	setGlobalOptions: globalOptions.setOptions,
	fontDetect,
	fontConvert,
	syllBreak,
	spellingFix
};
