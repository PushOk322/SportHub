import React, { useState } from 'react';
import './search.scss';
import searchIcon from '../../../img/search-icon.svg';

const Search = (props) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Lemon', 'Mango', 'Orange'];

    // Handle input changes and update suggestions
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Filter suggestions based on the input value
        const filteredSuggestions = data.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    return (
        <>
            <div
                className={inputVisible ? 'search active' : 'search'}
                onClick={() => setInputVisible(true)}
            >
                <img src={searchIcon} alt="" className="search__icon" />
                <input
                    type="text"
                    className={inputVisible ? 'search__input active' : 'search__input'}
                    value={inputValue}
                    onChange={handleInputChange}
                />

                {/* Display suggestions */}
                {inputValue !== '' && (
                    <ul className="suggestions">
                        {suggestions.map((item, index) => (
                            <li
                                className="suggestions__item"
                                key={index}
                                onClick={() => setInputValue(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Search;
