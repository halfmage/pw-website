const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, imgClass = "100vw") {
    if(alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }

    let metadata = await Image(src, {
        widths: [300, 600, 1200, 1800],
        formats: ['webp', 'jpeg'],
        urlPath: "/images/",
        outputDir: "./_site/images/"
    });

    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

    return `<picture>
        ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
        }).join("\n")}
        <img
            src="${lowsrc.url}"
            width="${highsrc.width}"
            height="${highsrc.height}"
            alt="${alt}"
            class="${imgClass}"
            loading="lazy"
            decoding="async">
        </picture>`;
}

module.exports = function(eleventyConfig) {

	// Fonts
    eleventyConfig.addPassthroughCopy('src/fonts')

    // 11ty image
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};