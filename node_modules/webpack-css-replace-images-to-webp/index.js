class WebpackCssReplaceImagesToWebp {
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            'WebpackCssReplaceImagesToWebp',
            (compilation, callback) => {
                for(let asset in compilation.assets) {
                    if(compilation.assets.hasOwnProperty(asset)) {
                        if(/\.css\?.*?$/.test(asset)) {
                            const source = new Buffer(compilation.assets[asset]._value.toString().replace(/\.(?:png|jpg)/g, '.webp'));
                            compilation.assets[asset.replace(/(\.min)\.?css(\?.*?)?$/, '.webp$1.css$2')] = {
                                source: () => source,
                                size: () => source.length
                            };
                        }
                    }
                }
                callback();
            }
        );
    }
}

module.exports = WebpackCssReplaceImagesToWebp;
