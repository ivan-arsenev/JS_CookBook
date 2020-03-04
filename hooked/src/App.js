import React from 'react';
import SearchPage from './Pages/SearchPage';
import BookDetailPage from './Pages/BookDetailPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from 'emotion-theming';

import theme from './Components/theme';
// Adding global CSS
import { Global, css } from '@emotion/core';

// importing the text from normalize.css file
import normalize from 'normalize.css';

const NoMatchRoute = () => {
    return <Link to={`/`}>404 --- Go back to search books</Link>;
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    ${normalize}
                    body {
                        background-color: #fafafa;
                    }
                `}
            />
            <Router>
                <Switch>
                    <Route path="/" exact component={SearchPage} />
                    <Route
                        path="/book/:bookId"
                        exact
                        component={BookDetailPage}
                    />
                    <Route component={NoMatchRoute} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
