

const BtnAction = (props) => {

    const handleClick = () => {
        props.onAction();
    };

    return (
        <button onClick={handleClick}>Ajouter !!!</button>
    );
}

BtnAction.defaultProps = {
    onAction: () => {}
};

export default BtnAction;