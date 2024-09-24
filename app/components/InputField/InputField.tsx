import styles from "./style.module.scss";

interface Props {
  label: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

export function InputField({ label, type }: Props) {
  return (
    <div>
      <label
        style={{
          fontSize: "80%",
        }}
      >
        {label}
        <input type={type} className={styles.inputField} />
      </label>
    </div>
  );
}
