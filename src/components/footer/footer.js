import image from '../../images/tmdb-logo.svg'

function Footer() {
    return (
        <footer>
            <div>
                <p>Created with:</p>
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