import React from 'react';

import PersonalDetails from './PersonalDetails';
import './App.css';
import { Container } from 'reactstrap';
import { IPersonState } from './State';

export default class App extends React.Component {
    private defaultPerson: IPersonState = {
        Address1: '',
        Address2: null,
        County: '',
        DateOfBirth: new Date().toISOString().substring(0, 10),
        FirstName: '',
        LastName: '',
        PersonId: '',
        PhoneNumber: '',
        Postcode: '',
        Town: '',
    };
    constructor(props: {}) {
        super(props);
    }
    public render() {
        return (
            <Container>
                <PersonalDetails DefaultState={this.defaultPerson} />
            </Container>
        );
    }
}
