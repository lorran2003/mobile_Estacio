import { Footer } from '@/src/components/Footer';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
});