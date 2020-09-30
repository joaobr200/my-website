import styled from "styled-components";

export const Container = styled.div`
 > div.container {
    width: 100%;

    display:flex;
    flex-wrap: wrap;

    h1 {
        font-size:2rem;
        line-height:2.8rem;
        color: ${({theme}) => theme.colors.gray};
    }

    h1::after {
          content:"";
          width:36px;
          height:4px;
          display:block;
          background: ${({theme}) => theme.colors.gray};
        }

 }

`;

export const CertificateWrapper = styled.article`
    position: relative;

    width:250px;
    height:230px;
    margin: 15px;
    
    border-radius:8px;

    background:${({theme}) => theme.colors.gray};
    box-shadow:0 0 5px 2.5 rgba(0,0,0,0.8);
    
    
    cursor:pointer;
    transition: all .2s ease;

    &:hover {
        opacity:0.9;
    }

    div.body {
        padding: 8px;
        p {
            font-size: 1.2rem;        
        }

        p.school {
            font-weight: 700;
        }
    }
`;

export const CertificateIcon = styled.div`
    position: absolute;
    top:150px;
    right:0;
    
`;


export const Image = styled.img`
      width:250px;
      height:150px;    
`;
