/**
 * Created by mihai on 4/30/2016.
 */

var ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');

function OutputIgnorePlugin(options){
	this.options = options || {};
}

module.exports = OutputIgnorePlugin;

OutputIgnorePlugin.prototype.apply = function(compiler){
	var self = this,
		options = self.options;

	compiler.plugin('emit', function(compilation, callback){
		var assets = Object.keys(compilation.assets).filter(ModuleFilenameHelpers.matchObject.bind(undefined, options));
		assets.forEach(function(asset){
			delete compilation.assets[asset];
		});
		callback();
	});
};
