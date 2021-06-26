import { render, screen } from '@testing-library/react';
import { Posts } from './posts.component'

const props = {
  posts: [
    {
      id: 1,
      title: '1 - Personagem: Harry Potter',
      body: 'human At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: '2 - Personagem:Hermione Granger',
      body: 'human At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: '3 - Personagem:Ron Weasley',
      body: 'human At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      cover: 'img/img3.png',
    },
  ]};

describe('<Posts />', () => {
    it('should render posts', () => {
      render(<Posts {...props} />);
  
      expect(screen.getAllByRole('heading', { name: /Personagem/i }))
        .toHaveLength(3);
      expect(screen.getAllByRole('img', { name: /Personagem/i }))
        .toHaveLength(3);
      expect(screen.getAllByText(/At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga./i))
        .toHaveLength(3);
        expect(screen.getByRole('img', { name: /3 - Personagem:Ron Weasley/i }))
        .toHaveAttribute('src', 'img/img3.png');
    });
  
    it('should not render posts', () => {
      render(<Posts />);
      expect(screen.queryByRole('heading', { name: /Personagem/i }))
        .not.toBeInTheDocument();
    });
});