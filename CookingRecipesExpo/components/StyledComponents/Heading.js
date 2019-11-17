// import React from 'react';
// import {Text} from 'react-native';
import styled from 'styled-components';


const font = 16;

const Heading = styled.Text`
fontSize: ${font};
color:  #363838;
marginTop: 20;
marginBottom: 20;
marginLeft: 14;
`;

export default Heading;


// const Heading = ({fontSize = 16}) => {
//     const size = Number(fontSize)

//     const StyledHeading = styled.Text`
//     fontSize: ${size};
//     color:  #363838;
//     marginTop: 20;
//     marginBottom: 20;
//     marginLeft: 14;
//     `;
//     return <StyledHeading/>
// }

