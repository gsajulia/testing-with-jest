/* Styles */
import './button.styles.css';

export const Button = ({ buttonValue, handleChange }) => {
    return (
        <div className="each-button-container">
            <button onClick={() => handleChange(buttonValue)} className={`button ${buttonValue}`}>
                <div className="inside-button">
                    {buttonValue !== "" &&  buttonValue !== undefined? 
                        buttonValue[0].toUpperCase() + buttonValue.substr(1) : null}
                </div>
            </button>
        </div>
    )
}