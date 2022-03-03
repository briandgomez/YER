import { render } from '@testing-library/react';
import image from '../../images/tmdb-logo.svg'


function Footer(props) {
    return (
        <footer>
            <div>
                <p>Create with:</p>
                <img
                    src={image}
                    height={'30px'}
                    width={'250px'}
                />
            </div>
        </footer>
    );
}

export default Footer;