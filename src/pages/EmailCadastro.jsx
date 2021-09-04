import React, {useState} from 'react';

import {Layout, Container, Box, Row, RowBetween} from '../components/Layout';

import apple from '../images/apple.png';
import load from '../images/load.png';

import Img from '../components/Img';
import { Button } from '../components/Buttons';
import {Input} from '../components/Input';
import {BoxInput, Icon, } from '../components/BoxInput';
import {Label, Text} from '../components/Label';

export default function Login(){
    const [state, setState] = useState(false);
    const [classEye, setClassEye] = useState('fas fa-eye');
    const [colorEye, setColorEye] = useState('#4ECB71');
    const [typeInput, setTypeInput] = useState('password');

    function show_password(){
        state ? setClassEye('fas fa-eye') : setClassEye('fas fa-eye-slash');
        state ? setColorEye('#4ECB71') : setColorEye('rgba(119, 119, 119, 0.6)');
        state ? setTypeInput('password') : setTypeInput('text'); 
        setState(!state);
    }

    return(<React.Fragment>
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