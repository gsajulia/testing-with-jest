import './input.styles.css';

export const Input = ({ searchValue, handleChange }) => {
    return (
        <input
            onChange={handleChange}
            value={searchValue}
            className="text-input"
            type="search"
            placeholder="Type your search" />
    )
}