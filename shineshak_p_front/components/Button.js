import styled, {css} from "styled-components";

export const ButtonStyle = css`
    background-color: #b15147;
    color:#f5f5f5;
    border:0;
    padding: 5px 15px;
    cursor: pointer;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight:500;
    svg{
        height: 16px;
        margin-right: 5px;
      }
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}
`;


const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function PrimaryBtn({children, ...rest}){
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
}