import React from "react";
import { Content } from "./styles";

interface CardProps {
  title: string;
  containerStyle?: React.CSSProperties;
  extra?: any;
}
const Card: React.FC<CardProps> = ({
  children,
  title,
  containerStyle,
  extra,
  ...rest
}) => {
  return (
    <Content title={title} style={containerStyle} {...rest} extra={extra}>
      {children}
    </Content>
  );
};

export default Card;
