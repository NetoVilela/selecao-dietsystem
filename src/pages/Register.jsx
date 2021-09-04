import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Container, Box, Row, RowBetween } from '../components/Layout';

import apple from '../images/apple.png';
import load from '../images/load.png';

import { Img, ImgLoad } from '../components/Img';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';
import { BoxInput, SmallDiv, Icon, IconEye } from '../components/BoxInput';
import { Term, TermLink } from '../components/Term';
import { CheckBox, BoxCheckBox } from '../components/Checkbox';

export default function RegisterPage() {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [classEye1, setClassEye1] = useState('fas fa-eye');
    const [classEye2, setClassEye2] = useState('fas fa-eye');
    const [colorEye1, setColorEye1] = useState('#4ECB71');
    const [colorEye2, setColorEye2] = useState('#4ECB71');
    const [typeInput1, setTypeInput1] = useState('password');
    const [typeInput2, setTypeInput2] = useState('password');

    function show_password(id) {
        if (id === 1) {
            state1 ? setClassEye1('fas fa-eye') : setClassEye1('fas fa-eye-slash');
            state1 ? setColorEye1('#4ECB71') : setColorEye1('rgba(119, 119, 119, 0.6)');
            state1 ? setTypeInput1('password') : setTypeInput1('text');
            setState1(!state1);
        }
        if (id === 2) {
            state2 ? setClassEye2('fas fa-eye') : setClassEye2('fas fa-eye-slash');
            state2 ? setColorEye2('#4ECB71') : setColorEye2('rgba(119, 119, 119, 0.6)');
            state2 ? setTypeInput2('password') : setTypeInput2('text');
            setState2(!state2);
        }
    }
    const history = useHistory();
    function delayAndGo(e) {
        e.preventDefault();

        setAnimation(true);

        setTimeout(() => history.push('/login'), 1000);
    }

    return (<React.Fragment>
        <Layout>
            <Container>
                <Box>
                    <Row mt='-2vh'>
                        <Img width='30%' src={apple} alt='Logo' />
                    </Row>
                    <RowBetween>
                        <Button margin='7vh 0 0 0' active={true} href='/register'>Cadastra-se</Button>
                        <Button margin='7vh 0 0 0' active={false} href='/login'>Já tenho cadastro</Button>
                    </RowBetween>
                    <Row>
                        <BoxInput>
                            <Input required placeholder="Seu nome" type='text' />
                            <Icon className='far fa-user'> </Icon>
                        </BoxInput>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Seu número de celular" type='text' />
                            <Icon className='fas fa-mobile'> </Icon>
                        </BoxInput>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Seu email" type='email' />
                            <Icon className='far fa-envelope'> </Icon>
                        </BoxInput>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Digite uma senha forte" type={typeInput1} />
                            <Icon className='fas fa-lock'> </Icon>
                            <IconEye color={colorEye1} onClick={() => show_password(1)} className={classEye1}> </IconEye>
                        </BoxInput>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Digite a senha novamente" type={typeInput2} />
                            <Icon className='fas fa-lock'> </Icon>
                            <IconEye color={colorEye2} onClick={() => show_password(2)} className={classEye2}> </IconEye>
                        </BoxInput>
                    </Row>
                    <Row mt='1vh'>
                        <BoxCheckBox>
                            <CheckBox type='checkbox' />
                            <SmallDiv>
                                <Term>Declaro que li e concordo com os &nbsp;<TermLink href="/termos_de_uso">termos de uso</TermLink>, e a&nbsp;<TermLink href="/politica_de_privacidade"> política de privacidade</TermLink>.</Term>
                            </SmallDiv>
                        </BoxCheckBox>
                    </Row>
                    <Row>
                        <Button margin='' active={true} onClick={delayAndGo} href='/login'>Finalizar cadastro</Button>
                    </Row>
                    <Row>
                        <Button margin='1vh 0 0 0' active={true} href='#'>
                            <ImgLoad animation={animation} width='12%' src={load} alt='Load' />
                        </Button>
                    </Row>
                </Box>
            </Container>
        </Layout>
    </React.Fragment>
    )
}