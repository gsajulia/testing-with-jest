import { render, screen } from '@testing-library/react';
import { PostCard } from './post-card.component';

const props = {
    title: 'Harry Potter',
    body: 'This character interpeted by Daniel Radcliffe is a human of Gryffindor house studant at Hogwarts and born at 31-07-1980 he is half-blood, has green eyes and black hair, his patronus is a stag and his wand core is phoenix feather and is made with holly wood.',
    id: 1,
    cover: 'img/img.png'
};

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
      render(<PostCard {...props} />);
  
      expect(screen.getByAltText('Harry Potter'))
        .toHaveAttribute('src', 'img/img.png');
      expect(screen.getByRole('heading', { name: '1 - Harry Potter' })).toBeInTheDocument();
      expect(screen.getByText(/This character interpeted by Daniel Radcliffe is a human of Gryffindor house studant at Hogwarts and born at 31-07-1980 he is half-blood, has green eyes and black hair, his patronus is a stag and his wand core is phoenix feather and is made with holly wood./i))
        .toBeInTheDocument();
    });

    it('should match snapshot', () => {
      const { container } = render(<PostCard {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
}); 
