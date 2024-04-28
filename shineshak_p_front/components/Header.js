import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";


const StyledHeader = styled.header`
    background-color: #eaf1f0;
`;

const Logo = styled(Link)`
    color: #b15147;
    text-decoration:none;
    position: relative;
    z-index: 3;
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  padding: 70px 20px 20px;
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color:#1f1f1f;
  text-decoration:none;
  padding: 10px 0;
  font-size: 12px
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;


export default function Header(){
    return (
        <header>
            <StyledHeader>
                <Center>
                    <Wrapper>
                        <Logo  href={'/'}>Shine Shack</Logo>
                        <StyledNav>
                            <NavLink href={'/'}>Home</NavLink>
                            <NavLink href={'/bestsellers'}>Best Sellers</NavLink>
                            <NavLink href={'/earrings'}>EARRINGS</NavLink>
                            <NavLink href={'/rings'}>RINGS</NavLink>
                            <NavLink href={'/necklaces'}>NECKLACES</NavLink>
                            <NavLink href={'/bracelets'}>BRACELETS</NavLink>
                            <NavLink href={'/accaunt'}>Accaunt</NavLink>
                            <NavLink href={'/wishlist'}>Wishlist</NavLink>
                            <NavLink href={'/cart'}>Cart (0)</NavLink>
                        </StyledNav>
                    </Wrapper>
                </Center>
            </StyledHeader>
        </header>
    )
}