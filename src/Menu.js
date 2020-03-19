import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador:{
        screen: () => <Contador numero={9}/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: "Mega Senna" }
    },
    Inverter:{
        screen: () => <Inverter texto='React Native'/>
    },
    ParImpar:{
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: { title: 'Par Impar'}
    },
    Simples:{
        screen: () => <Simples texto='flexivel'/>
    }
}, { drawerWidth: 300 })