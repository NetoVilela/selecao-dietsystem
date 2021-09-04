import React, {useState} from 'react';

import { Layout, Container, Box, Row } from '../components/Layout';
import { useHistory } from "react-router-dom";

import apple from '../images/apple.png';
import load from '../images/load.png';

import { Img, ImgLoad } from '../components/Img';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';
import { BoxInput, Icon, } from '../components/BoxInput';
import { Label, Text } from '../components/Label';



export default function EmailCadastroPage() {
    const [animation, setAnimation] = useState(false);

    const history = useHistory();
    function delayAndGo(e) {
        e.preventDefault();

        setAnimation(true);

        setTimeout(() => history.push('/esqueci_a_senha'), 1000);
    }

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
                        <Button margin='7vh 0 0 0' active={true}  onClick={delayAndGo} href='/esqueci_a_senha'>Enviar</Button>
                    </Row>

                    <Row justifyContent='flex-end'>
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