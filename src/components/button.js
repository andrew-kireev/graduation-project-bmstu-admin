const Button = (props) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.text}
        </div>
    );
};

export default Button;
