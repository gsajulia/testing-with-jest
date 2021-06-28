import { render, screen } from '@testing-library/react';
import { PostCard } from './post-card.component';

const props = {
    title: 'Harry Potter',
    body: 'human At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    id: 1,
    cover: 'img/img.png'
};

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
      render(<PostCard {...props} />);
  
      expect(screen.getByAltText('Harry Potter'))
        .toHaveAttribute('src', 'img/img.png');
      expect(screen.getByRole('heading', { name: '1 - Harry Potter' })).toBeInTheDocument();
      expect(screen.getByText(/At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga./i)).toBeInTheDocument();
    });
}); 
