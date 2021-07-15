import PropTypes from 'prop-types';

const MsgList = (props) => {
    const {filtre} = props;
    
    console.log(props.msgs);
    
    const msgs = props.msgs.filter(
        msg => msg.content.includes(filtre)
    );

    const msgJSX = msgs.map(
        msg => <li key={msg.id}>{msg.content}</li>
    );

    return (<>
        <p>Nombre d'élément : {msgs.length}. {!!filtre && `(Filtre: ${filtre})`}</p>
        <ul>
            {msgJSX}
        </ul>
    </>);
}

MsgList.defaultProps = {
    msgs: [],
};

MsgList.propTypes = {
    msg: PropTypes.array,
    filtre: PropTypes.string
}

export default MsgList;