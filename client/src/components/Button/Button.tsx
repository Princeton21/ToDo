import styles from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: React.ComponentType<any>;
  color?: number;
};

const Button = (props: ButtonProps) => {
  const Icon = props.icon;
  console.log(props);
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={props.onClick}
        style={{
          backgroundColor: `hsl(${props.color}, 45%, 63%,})`
        }}
      >
        {Icon && <Icon className={styles.icon} />}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
