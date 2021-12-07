import './styles.css';

export const Button = (props) => {
    const {isDisabled, action, type, text, link} = props;

    return (
        <button onClick={action} disabled={isDisabled} className={type}><a href={link}>{text}</a></button>
    )
}