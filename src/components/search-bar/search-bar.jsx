import { useState } from "react";
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envoyer la recherche au composent parent
        props.onSearch(search);

        // Effacer le contenu de la search bar
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit">Rechercher</button>
        </form>
    );
}

SearchBar.defaultProps = {
    // J'ai choisi que 'onSearch' dans mes props sera un evenement
    onSearch: () => {}  // loop
};

SearchBar.propTypes = {
    onSearch: PropTypes.func
};

export default SearchBar;