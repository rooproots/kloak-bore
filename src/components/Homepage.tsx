import { getPath } from '../utils/getPath';

// Other imports

const Homepage = () => {
    return (
        <div>
            <a href={getPath('/kloak-bore/route1')}>Link 1</a>
            <a href={getPath('/kloak-bore/route2')}>Link 2</a>
            <a href={getPath('/kloak-bore/route3')}>Link 3</a>
            {/* Add other links likewise */}
        </div>
    );
};

export default Homepage;