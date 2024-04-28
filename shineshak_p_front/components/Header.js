import Link from "next/link";
import styled from "styled-components";


const StyledHeader = styled.header`
    background-color: #f5f5f5;
    
`;

export default function Header(){
    return (
        <header>
            <StyledHeader>
                <Link href={'/'}>Shine Shack</Link>
                <nav>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/men'}>Men</Link>
                    <Link href={'/women'}>Women</Link>
                    <Link href={'/bestsellers'}>Best Sellers</Link>
                    <Link href={'/earrings'}>EARRINGS</Link>
                    <Link href={'/rings'}>RINGS</Link>
                    <Link href={'/necklaces'}>NECKLACES</Link>
                    <Link href={'/bracelets'}>BRACELETS</Link>
                    <Link href={'/accaunt'}>Accaunt</Link>
                    <Link href={'/wishlist'}>Wishlist</Link>
                    <Link href={'/cart'}>Cart (0)</Link>
                </nav>
            </StyledHeader>
        </header>
    )
}