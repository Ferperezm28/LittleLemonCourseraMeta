
function Footer() {
    return(
        <footer className='footer'>
            <img src={require('../Assets/little.png')} />
            <div>
                <ul className='doo-nav'>
                    <li className='title-footer'>Doormat Navegation</li>
                    <li className='item-footer'>Home</li>
                    <li className='item-footer'>About</li>
                    <li className='item-footer'>Menu</li>
                    <li className='item-footer'>Reservations</li>
                    <li className='item-footer'>Order online</li>
                    <li className='item-footer'>Login</li>
                </ul>
                <ul className='contact-footer'>
                    <li className='title-footer'>Contact</li>
                    <li className='item-footer'>Address</li>
                    <li className='item-footer'>Phone number</li>
                    <li className='item-footer'>Email</li>
                </ul>
                <ul className='social-footer'>
                    <li className='title-footer'>Social media</li>
                    <li className='item-footer'>Web site</li>
                    <li className='item-footer'>Instagram</li>
                    <li className='item-footer'>Facebook</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;