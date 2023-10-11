/**
 * Created by mihai on 4/30/2016.
 */

const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');

function OutputIgnorePlugin(options) {
	this.options = options || {};
}

module.exports = OutputIgnorePlugin;

OutputIgnorePlugin.prototype.apply = function (compiler) {
	const self = this,
		options = self.options;

	compiler.hooks.emit.tap('OutputIgnorePlugin', (compilation) => {
		const assets = Object.keys(compilation.assets).filter(ModuleFilenameHelpers.matchObject.bind(undefined, options));
		assets.forEach(function (asset) {
			delete compilation.assets[asset];
		});
	});
};
