import React from 'react';
import Header from './header'
import Left from './left'
import styled from 'tachyons-components'


const Wrapper = styled('div')`
pv3 fl w-40 
`

const Stats = props => (
        <Wrapper >
            <Header header= {props.a} />
            <Left numba= {props.b} />
        </ Wrapper>
      );

  
export default Stats;