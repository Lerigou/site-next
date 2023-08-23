import styles from "./button.module.scss";

interface Props {
    children: string,
    onClick: () => void,
}

'use client'
export default function Btn({
    children, 
    onClick
}: Props) {
    return(
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}