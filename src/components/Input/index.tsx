import Icon, { IconBaseProps } from "@ant-design/icons/lib/components/Icon";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <>
    <input {...rest} />
  </>
);

export default Input;
