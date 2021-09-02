import React, {useState} from 'react';

import {Layout, Container, Box, Row, RowBetween} from '../components/Layout';

import apple from '../images/apple.png';
import load from '../images/load.png';

import Img from '../components/Img';
import { Button } from '../components/Buttons';
import {Input} from '../components/Input';
import {BoxInput, SmallDiv, Icon, IconEye, Small, Load} from '../components/BoxInput';

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
                        <Row>
                            <Img width='30%' src={apple} alt='Logo' />
                        </Row>
                        <RowBetween>
                            <Button margin='7vh 0 0 0' active={false} href='#'>Cadastra-se</Button>
                            <Button margin='7vh 0 0 0' active={true} href='#'>Já tenho cadastro</Button>
                        </RowBetween>
                        <Row>
                            <BoxInput>
                                <Input placeholder="admin@dietsystem.com" type='email' />
                                <Icon className='far fa-envelope'> </Icon>
                            </BoxInput>
                        </Row>
                        <Row>
                            <BoxInput>
                                <Input placeholder="Digite a sua senha" type={typeInput} />
                                <Icon className='fas fa-lock'> </Icon>
                                <IconEye color={colorEye} onClick={show_password} className={classEye}> </IconEye>
                                
                            </BoxInput>
                        </Row>
                        <Row>
                            <SmallDiv>
                                <Small href='#esqueciasenha'>Esqueci minha senha</Small>
                            </SmallDiv>
                        </Row>
                        <Row>
                            <Button margin='7vh 0 0 0' active={true} href='#entrar'>Entrar</Button>
                        </Row>
                        <Row>
                            <Button margin='1vh 0 0 0' active={true} href='#entrar'>
                                <Img width='10%' src={load} alt='Load' />
                            </Button>
                        </Row>
                    </Box>
                </Container>
            </Layout>
        </React.Fragment>
    )
}