import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    type: 'primary' | 'secondary';
    href: string;
    download?: boolean;
    className?: string;
}

export const Button = ({ text, type, href, download = false, className = '' }: ButtonProps) => {
    return (
        <a
            href={href}
            className={`${styles.button} ${styles[type]} ${className}`}
            download={download}
            target="_blank"
            rel="noreferrer"
        >
            {text}
        </a>
    );
};
