import image from '../../images/tmdb-logo.svg'

function Footer() {
    return (
        <footer>
            <div>
                <p style={{paddingTop:'7px'}}>Created with</p>
                <img
                    src={image}
                    style={{paddingBottom:'7px'}}
                    height={'30px'}
                    width={'250px'}
                />
            </div>
        </footer>
    );
}

export default Footer;