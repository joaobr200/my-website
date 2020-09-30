import React from "react";
import { useRouter } from "next/router";

import certificates from "./certificates";
import SampleCertificate from "../../assets/sample-certificate.svg";
import { FaMedal } from "react-icons/fa";
import { Container,CertificateWrapper,CertificateIcon, Image } from "./styles";

const Certificates: React.FC = () => {
  const router = useRouter();
  function handleClickNavigateToCertificate(url: string) {
    router.push(url);
  }
  return (
    <Container>
      <div className="container">
        <h1>Certificados</h1>
      </div>
      <div className="container">
      {certificates.map(({name,school,imageUri,url}) => (
        <>
          <CertificateWrapper key={name} onClick={() => handleClickNavigateToCertificate(url)}>
          <header>
            {imageUri ? <Image src={imageUri} alt="certificate"/> : <SampleCertificate/>}
          </header>
          <div className="body">
            <p  className="school">{school}</p>
            <p>{name}</p>
          </div>
          <CertificateIcon>
            <FaMedal fontSize={32} />
          </CertificateIcon>
          </CertificateWrapper>
        </>
      ))}
      </div>
    </Container>
  );
};

export default Certificates;
