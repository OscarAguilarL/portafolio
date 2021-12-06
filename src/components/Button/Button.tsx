import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    type: 'primary' | 'secondary';
    href: string;
    download?: boolean;
}

export const Button = ({ text, type, href, download = false }: ButtonProps) => {
    return (
        <a
            href={href}
            className={`${styles.button} ${styles[type]}`}
            download={download}
            target="_blank"
            rel="noreferrer"
        >
            {text}
        </a>
    );
};
