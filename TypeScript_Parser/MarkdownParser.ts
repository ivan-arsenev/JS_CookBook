class HtmlHandler {
    public TextChangeHandler(id: string, output: string): void {
        let markdown = <HTMLTextAreaElement>document.getElementById(id);
        let markdownOutput = <HTMLLabelElement>document.getElementById(output);
        if (markdown !== null) {
            markdown.onkeyup = e => {
                if (markdown.value) {
                    markdownOutput.innerHTML = markdown.value;
                } else markdownOutput.innerHTML = '<p></p>';
            };
        }
    }
}

enum TagType {
    Paragraph,
    Header1,
    Header2,
    Header3,
    HorizontalRule,
}
/*
 Single Responsibility Principle
 Classes thatonly do one thing are generally much easier to test 
 and they are a lot easier tounderstand. 
 That does not mean that they should only have one method. 
 They can havemany methods, as long as they are all related to the purpose of the class.
*/
class TagTypeToHtml {
    // ** private readonly ** after the class has been instantiated, tagType cannot be recreated elsewhere in theclass.
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
    constructor() {
        this.tagType.set(TagType.Header1, 'h1');
        this.tagType.set(TagType.Header2, 'h2');
        this.tagType.set(TagType.Header3, 'h3');
        this.tagType.set(TagType.HorizontalRule, 'hr');
        this.tagType.set(TagType.Paragraph, 'h3');
    }

    public OpeningTag(tagType: TagType): string {
        return this.GetTag(tagType, `<`);
    }
    public ClosingTag(tagType: TagType): string {
        return this.GetTag(tagType, `</`);
    }

    public GetTag(tagType: TagType, openingTagPattern: string): string {
        let tag = this.tagType.get(tagType);
        if (tag !== null) {
            return `${openingTagPattern}${tag}`;
        }
        return `${openingTagPattern}`;
    }
}

interface IMarkdownDocument {
    Add(...content: string[]): void;
    Get(): string;
}

class MarkdownDocument implements IMarkdownDocument {
    private content: string = '';
    Add(...content: string[]): void {
        content.forEach(el => {
            this.content += el;
        });
    }
    Get(): string {
        return this.content;
    }
}

class ParseElement {
    CurrentLine: string = '';
}

/* Visitor patter (паттерн наблюдателя) 🔍*/

interface IVisitor {
    Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void;
}
interface IVisitable {
    Accept(
        visitor: IVisitor,
        token: ParseElement,
        markdownDocument: IMarkdownDocument
    ): void;
}

abstract class VisitorBase implements IVisitor {
    constructor(
        private readonly tagType: TagType,
        private readonly TagTypeToHtml: TagTypeToHtml
    ) {}
    Visit(token: ParseElement, markdownDocument: IMarkdownDocument): void {
        markdownDocument.Add(
            this.TagTypeToHtml.OpeningTag(this.tagType),
            token.CurrentLine,
            this.TagTypeToHtml.ClosingTag(this.tagType)
        );
    }
}

class Header1Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header1, new TagTypeToHtml());
    }
}
class Header2Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header2, new TagTypeToHtml());
    }
}
class Header3Visitor extends VisitorBase {
    constructor() {
        super(TagType.Header3, new TagTypeToHtml());
    }
}
class ParagraphVisitor extends VisitorBase {
    constructor() {
        super(TagType.Paragraph, new TagTypeToHtml());
    }
}
class HorizontalVisitor extends VisitorBase {
    constructor() {
        super(TagType.HorizontalRule, new TagTypeToHtml());
    }
}
