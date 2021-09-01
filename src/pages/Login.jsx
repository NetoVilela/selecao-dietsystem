import React from 'react';

import {Container, Box, Row} from '../components/Layout';

import apple from '../images/apple.png';

export default function Login(){
    return(<React.Fragment>
            <Container>
                <Box>
                    <Row>
                        <img src={apple} alt='Logo' />
                    </Row>
                </Box>
            </Container>
        </React.Fragment>
    )
}