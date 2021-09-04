import React, { useState } from 'react';

import { Layout, Container, Box, Row } from '../components/Layout';
import { useHistory } from "react-router-dom";

import apple from '../images/apple.png';
import load from '../images/load.png';

import { Img, ImgLoad } from '../components/Img';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';
import { BoxInput, Icon, IconEye } from '../components/BoxInput';
import { Label } from '../components/Label';

export default function EsqueciASenhaPage() {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [classEye1, setClassEye1] = useState('fas fa-eye');
    const [classEye2, setClassEye2] = useState('fas fa-eye');
    const [colorEye1, setColorEye1] = useState('#4ECB71');
    const [colorEye2, setColorEye2] = useState('#4ECB71');
    const [typeInput1, setTypeInput1] = useState('password');
    const [typeInput2, setTypeInput2] = useState('password');
    const [animation, setAnimation] = useState(false);

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
                    <Row mt='2vh'>
                        <Img width='30%' src={apple} alt='Logo' />
                    </Row>

                    <Row justifyContent='flex-start' mt='2vh'>
                        <Label>Crie uma nova senha</Label>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Digite a sua nova senha" type={typeInput1} />
                            <Icon className='fas fa-lock'> </Icon>
                            <IconEye color={colorEye1} onClick={() => show_password(1)} className={classEye1}> </IconEye>
                        </BoxInput>
                    </Row>
                    <Row>
                        <BoxInput>
                            <Input placeholder="Confirme a sua nova senha" type={typeInput2} />
                            <Icon className='fas fa-lock'> </Icon>
                            <IconEye color={colorEye2} onClick={() => show_password(2)} className={classEye2}> </IconEye>
                        </BoxInput>
                    </Row>
                    <Row>
                        <Button margin='7vh 0 0 0' active={true} href='/login' onClick={delayAndGo}>Alterar senha</Button>
                    </Row>
                    <Row >
                        <Button margin='1vh 0 0 0' active={true} href='#entrar'>
                            <ImgLoad animation={animation} width='12%' src={load} alt='Load' />
                        </Button>
                    </Row>

                </Box>
            </Container>
        </Layout>
    </React.Fragment>
    )
}