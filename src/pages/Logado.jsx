import React from 'react';

import {Title, Text, MySite} from '../components/Apresentation';

export default function LogadoPage(){
    return(
        <>
         <Title>Olá, meu nome é Neto Vilela.</Title>
         <Text>Click no link abaixo para me conhecer um pouco mais.</Text>
         <MySite href="https://netovilela.vercel.app/" target='_blank'>netovilela.vercel.app</MySite>   
        </>
    )
}
