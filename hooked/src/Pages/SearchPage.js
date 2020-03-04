import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import BookSearchForm from '../Components/BookSearchForm';
import Loader from '../Components/Loader';
import BookList from '../Components/BookList';

import { Container, Header } from '../Components/shared';
// We can extend a react styled component to create styles on top of it

const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    @media (max-width: 778px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const LogoText = styled.h3`
    margin: 0;
`;

// The styles written inside follows same syntax as CSS, so there is no special learning curve for styled components
const HeaderSearchForm = styled.div`
    margin-left: auto;
`;

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({ items: [] });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const fetchBooks = async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await axios.get(`${API_URL}?q=${searchTerm}`);
            setBooks(result.data);
        } catch (error) {
            setError(error);
        }
        // After Api operation end
        setLoading(false);
    };

    const onInputChange = e => {
        setSearchTerm(e.target.value);
    };

    // Submit handler
    const onSubmitHandler = e => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call fetch books async function
        fetchBooks();
    };
    return (
        <>
            <Header>
                <HeaderContainer>
                    <LogoText>Bookie</LogoText>
                    <HeaderSearchForm>
                        <BookSearchForm
                            onSubmitHandler={onSubmitHandler}
                            searchTerm={searchTerm}
                            onInputChange={onInputChange}
                            error={error}
                        />
                    </HeaderSearchForm>
                </HeaderContainer>
            </Header>

            <Loader loading={loading} searchTerm={searchTerm} />
            <BookList books={books} />
        </>
    );
};

export default SearchPage;
