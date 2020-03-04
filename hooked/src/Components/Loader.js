/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Loader = ({ loading, children }) => {
    return (
        <>
            {loading && (
                <div
                    css={css`
                        color: green;
                        text-align: center;
                        padding: 20px 0;
                    `}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default Loader;
