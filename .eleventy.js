module.exports = function(eleventyConfig) {

	// Fonts
    eleventyConfig.addPassthroughCopy('src/fonts')

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};