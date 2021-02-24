import React from "react";
import { Content, FooterCompanyName, Text } from "./styles";

const Footer: React.FC = () => {
  return (
    <Content>
      <Text>
        Copyright &copy; 2021{" "}
        <FooterCompanyName>IoT Health UFJF</FooterCompanyName>. Todos direitos
        reservados
      </Text>
    </Content>
  );
};

export default Footer;
