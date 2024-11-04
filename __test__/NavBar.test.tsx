import { NavBar } from '@/src/components/NavBar';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
});