import * as React from "react";
import styles from "./Form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
