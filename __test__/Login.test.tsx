import { Login } from '@/src/components/User/Login';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});