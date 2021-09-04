import React from 'react';

import { Layout, Container, Box, Row } from '../components/Layout';

import apple from '../images/apple.png';
import load from '../images/load.png';

import Img from '../components/Img';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';
import { BoxInput, Icon, } from '../components/BoxInput';
import { Label, Text } from '../components/Label';



export default function EmailCadastroPage() {   

    return (<React.Fragment>
        <Layout>
            <Container>
                <Box>
                    <Row mt='2vh'>
                        <Img width='30%' src={apple} alt='Logo' />
                    </Row>
                    <Row justifyContent='center' mt='4vh'>
                        <Label>Digite seu e-mail cadastrado</Label>
                    </Row>
                    <Row>
                        <Text>Você receberá, em seu e-mail, o link para redefenir a sua senha</Text>
                    </Row>

                    <Row>
                        <BoxInput>
                            <Input placeholder="Digite seu e-mail cadastrado" type='email' />
                            <Icon className='far fa-envelope'> </Icon>
                        </BoxInput>
                    </Row>

                    <Row justifyContent='space-between'>
                        <Button margin='7vh 0 0 0' active={false} href='/login'>Voltar</Button>
                        <Button margin='7vh 0 0 0' active={true} href='/esqueci_a_senha'>Enviar</Button>
                    </Row>

                    <Row justifyContent='flex-end'>
                        <Button margin='1vh 0 0 0' active={true} href='#'>
                            <Img width='10%' src={load} alt='Load' />
                        </Button>
                    </Row>

                </Box>
            </Container>
        </Layout>
    </React.Fragment>
    )
}