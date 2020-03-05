import React, { useState } from 'react';

function LimitedWordTextarea({ rows, cols, value, limit }) {
    const [content, setContent] = useState(value);
    const [wordCount, setWordCount] = useState(0);

    const setFormattedContent = text => {
        let words = text.split(' ');
        if (words.filter(Boolean).length > limit) {
            setContent(
                text
                    .split(' ')
                    .slice(0, limit)
                    .join(' ')
            );
            setWordCount(limit);
        } else {
            setContent(text);
            setWordCount(words.filter(Boolean).length);
        }
    };

    React.useEffect(() => {
        setFormattedContent(content);
    }, []);

    return (
        <div>
            <textarea
                rows={rows}
                cols={cols}
                onChange={event => setFormattedContent(event.target.value)}
                value={content}
                placeholder="This is test component"
            />
            <p>
                {wordCount}/{limit}
            </p>
        </div>
    );
}

export default LimitedWordTextarea;
