import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button.component';

const buttonValue = "gryffindor";

describe('<Button />', () => {
  it('should render the button with the text of the house', () => {
    render(<Button buttonValue={buttonValue}/>);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: "Gryffindor" }); // or name: /gryffindor/i
    expect(button).toBeInTheDocument(); //assertion
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button buttonValue={buttonValue} handleChange={fn} />);

    const button = screen.getByRole('button', { name: "Gryffindor" });
    
    userEvent.click(button); // or fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });
});