import styles from "./style.module.scss";

interface Props {
  label: string;
}

export function CheckBox({ label }: Props) {
  return (
    <div className={styles.checkBoxContainer}>
      <label
        style={{
          fontSize: "80%",
        }}
      >
        <input className={styles.checkBox} type="checkbox" />
        {label}
      </label>
    </div>
  );
}
