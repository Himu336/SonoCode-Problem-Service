const marked = require('marked');
const sanitizeHtmlLib = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);

    const sanitizedHtml = sanitizeHtmlLib(convertedHtml, {
        allowedTags: sanitizeHtmlLib.defaults.allowedTags.concat(['img'])
    });

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
};

module.exports = sanitizeMarkdownContent;