import React from 'react';
import styled from 'tachyons-components'

const Text = styled('div')`fw5 f2 helvetica dim nb0 `

const Numbers = props => (<Text>{props.numba}</Text>);

export default Numbers;