import React from 'react';

import {Layout, Container, Box, Row, RowBetween} from '../components/Layout';

import apple from '../images/apple.png';

import Img from '../components/Img';
import { Button } from '../components/Buttons';
import {Input} from '../components/Input';

export default function Login(){
    return(<React.Fragment>
            <Layout>
                <Container>
                    <Box>
                        <Row>
                            <Img src={apple} alt='Logo' />
                        </Row>
                        <RowBetween>
                            <Button active={false} href='#'>Cadastra-se</Button>
                            <Button active={true} href='#'>Já tenho cadastro</Button>
                        </RowBetween>
                        <Row>
                            <Input placeholder="admin@dietsystem.com" />
                        </Row>
                    </Box>
                </Container>
            </Layout>
        </React.Fragment>
    )
}