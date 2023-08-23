import styles from "./button.module.scss";

interface Props {
    children: string,
    onClick: () => void,
    inversed?: Boolean,
}

export default function Btn({
    children, 
    onClick,
    inversed = false
}: Props) {
    return(
        <button 
            className={styles.button} 
            onClick={onClick} 
            data-inversed={`${inversed}`}>
            {children}
        </button>
    );
}