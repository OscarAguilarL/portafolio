import styles from './Wrapper.module.css';

export const Wrapper = ({ children }: any) => {
    return <div className={styles.wrapper}>{children}</div>;
};
