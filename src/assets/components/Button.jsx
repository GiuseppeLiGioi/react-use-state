function Button({ lang, onClick }) {
    const {id, title, description} = lang;
    return (
        <button className="btn" onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;
