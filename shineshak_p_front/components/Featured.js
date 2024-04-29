import Center from "./Center";
import styled from "styled-components";
import StyledButton from "@/components/Button";
import ButtonLink from "./ButtonLink";


const Bg = styled.div`
  background-color: #eaf1f0;
  color:#1f1f1f;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:600;
`;
const Desc = styled.p`
  font-size:.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.45fr 1.2fr;
  gap: 39px;
  img{
    max-width: 100%;
    margin-right: 5px;
    max-height: 330px;
    border-radius: 10px;
  } 
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Fetured({product}){
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>Because fine jewelry is an expression of self: to mean what you want, wear how you want, celebrate with when you want, and keep forever. It’s for grand moments, minor milestones, and every day in between.</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/'+product._id}>Read more</ButtonLink>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://shine-shack.s3.amazonaws.com/1714321039609.jpg" alt=""></img>
                        <img src="https://shine-shack.s3.amazonaws.com/1714321791713.jpg" alt=""></img>
                        <img src="https://shine-shack.s3.amazonaws.com/1714322172110.jpg" alt=''></img> 
                    </Column>
                </Wrapper>
            </Center>
            
        </Bg>  
        
    );
}