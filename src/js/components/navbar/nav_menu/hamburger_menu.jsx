import React from 'react';

import HamburgerDropdown from './hamburger_dropdown';

const dropdown = () => {
    let hamburgerDropdown = $('#hamburger-dropdown-container');
    hamburgerDropdown.fadeIn();
    hamburgerDropdown.mouseleave(() => hamburgerDropdown.slideUp());
};

const HamburgerMenu = () => (
    <div id='hamburger-menu' onClick={ dropdown }>
        <span className='hamburger-slab'></span>
        <span className='hamburger-slab'></span>
        <span className='hamburger-slab'></span>
        <HamburgerDropdown />
    </div>
);

export default HamburgerMenu;
