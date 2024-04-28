import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #eaf1f0;
  color:#1f1f1f;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:600;
  font-size:1.8rem;
  @media screen and (min-width: 768px) {
    font-size:1.8rem;
  }
`;

const Desc = styled.p`
  color:#1f1f1f;
  font-size:1rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
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


export default function Featured(){
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                <div>
                    <div>
                        <Title>THE LETTER SHOP</Title>
                        <Desc>NEW IN</Desc>
                    </div>
                    <div>
                        <img src="https://shine-shack.s3.amazonaws.com/1713644438836.jpg" alt=""/>
                    </div>
                </div>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}