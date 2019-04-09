import React from 'react';
import styled from 'tachyons-components'

const Text = styled('div')`fw1 f1 helvetica dim nb2`

const Header = props => (
      <Text > {props.header} </ Text>
      );
 
  export default Header;