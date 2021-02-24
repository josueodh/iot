import React from "react";
import { Content } from "./styles";

interface CardProps {
  title: string;
  containerStyle?: React.CSSProperties;
}
const Card: React.FC<CardProps> = ({ children, title, containerStyle }) => {
  return (
    <Content title={title} style={containerStyle}>
      {children}
    </Content>
  );
};

export default Card;
