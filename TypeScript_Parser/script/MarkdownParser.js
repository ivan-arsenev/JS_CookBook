"use strict";
class HtmlHandler {
    TextChangeHandler(id, output) {
        let markdown = document.getElementById(id);
        let markdownOutput = document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                }
                else
                    markdownOutput.innerHTML = '<p></p>';
            };
        }
    }
}
//# sourceMappingURL=MarkdownParser.js.map