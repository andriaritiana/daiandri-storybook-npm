import styled from "styled-components";

export interface InputProps {
  fullWidth?: boolean;
  hasError?: boolean; 
}

export const Input = styled.input<InputProps>`
/* Adapt the colors based on primary prop */
background: #eee;
color: blue;
width: ${props => props.fullWidth ? '100%' : 'auto'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid ${props => props.hasError ? 'red' : '#2196f3'};
border-radius: 3px;
`;
