function Button({ lang, onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            {lang.title}
        </button>
    );
}

export default Button;
