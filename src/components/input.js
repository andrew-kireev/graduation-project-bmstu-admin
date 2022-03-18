const Input = (props) => {
    return (
        <div className={props.className}>
            <input value={props.value} onChange={props.onChange}/>
        </div>
    );
};

export default Input;
