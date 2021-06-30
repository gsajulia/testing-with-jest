import { render, screen } from '@testing-library/react';
import { Posts } from './posts.component'

const props = {
  posts: [
    {
      id: 1,
      title: '1 - Harry Potter',
      body: 'This character interpeted by Daniel Radcliffe is a human of Gryffindor house studant at Hogwarts and born at 31-07-1980 he is half-blood, has green eyes and black hair, his patronus is a stag and his wand core is phoenix feather and is made with holly wood.',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: '2 - Hermione Granger',
      body: 'This character interpeted by Emma Watson is a human of Gryffindor house studant at Hogwarts and born at 19-09-1979 she is muggleborn, has brown eyes and brown hair, her patronus is a otter and her wand core is dragon heartstring and is made with vine wood.',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      title: '3 - Ron Weasley',
      body: 'This character interpeted by Rupert Grint is a human of Gryffindor house studant at Hogwarts and born at 01-03-1980 he is pure-blood, has blue eyes and red hair, his patronus is a Jack Russell terrier and his wand core is unicorn tail-hair and is made with willow wood.',
      cover: 'img/img3.png',
    },
  ]};

describe('<Posts />', () => {
    it('should render posts', () => {
      render(<Posts {...props} />);
  
      expect(screen.getAllByRole('heading', { name: props.posts.title}))
        .toHaveLength(3);
      expect(screen.getAllByRole('img', { name: / - /i }))
        .toHaveLength(3);
      expect(screen.getAllByText(/Gryffindor house/i))
        .toHaveLength(3);
        expect(screen.getByRole('img', { name: /3 - Ron Weasley/i }))
        .toHaveAttribute('src', 'img/img3.png');
    });
  
    it('should not render posts', () => {
      render(<Posts />);
      expect(screen.queryByRole('heading', { name: / - /i }))
        .not.toBeInTheDocument();
      expect(screen.getByText("There are no posts =("))
        .toBeInTheDocument();
    });
    
    it('should match snapshot', () => {
      const {container} = render(<Posts {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
});