import styled from "styled-components";
import { Button as ButtonAnt } from "antd";

export const Content = styled.div`
  max-width: 330px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgb(241, 241, 241);
  padding: 20px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: inset 0 0 1em rgb(248, 248, 248), 0 0 1em rgb(204, 204, 204);
`;

export const Image = styled.img`
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled(ButtonAnt)`
  width: 100%;
  border-radius: 5px;
`;
