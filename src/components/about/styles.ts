import styled from "styled-components";

export const Container = styled.section`
      width:100%;
      padding: 8px;

      background: ${({theme}) => theme.colors.secundary};

      > div.container{
          display:flex;
          
          img {
          width:250px;
          height:250px;
          margin-right:8px;

          border-radius:50%;
          box-shadow: 0px 0px 0px 7px #fff;
        }
      }

      @media screen and (max-width: 748px){
       > div.container {
        flex-direction: column;

        img {
          margin-top: -80px;
        }
       }
      }
`;

export const Content = styled.div`
      width:100%;
      margin: 15px 0;
      padding: 8px;

      display:flex;
      flex-wrap:wrap;

      div {
       width:100%;
      }

      div h1 {
          font-size:2rem;
          line-height:2.8rem;
          color: ${({theme}) => theme.colors.gray};
        }

        div h1::after {
          content:"";
          width:36px;
          height:4px;
          display:block;
          background: ${({theme}) => theme.colors.gray};
        }

        div p {
          font-size:1.2rem;
          line-height: 1.6rem;
          margin:8px;
          color: ${({theme}) => theme.colors.gray};
        }

        div article {
          display:flex;
          width:100%;

          @media screen and (max-width:748px){
            flex-direction:column;
          }
          
        }

`;
