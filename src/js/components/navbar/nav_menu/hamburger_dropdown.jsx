import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { signout } from '../../../actions/session_actions';

const close = e => {
    e.stopPropagation();
    $('#hamburger-dropdown-container').fadeOut();
};

const HamburgerDropdown = props => (
    <div id='hamburger-dropdown-container'>
        <span onClick={ close } className='modal no-desktop close-modal'>x</span>

        <ul id='hamburger-dropdown'>
            <li onClick={ close }>
                <Link className='full flex align-center' to={`/blogs/user`}>
                    My Blogs
                </Link>
            </li>

            {/*
                <li onClick={ close }>
                    <Link className='full flex align-center' to={`/users/${props.currentUser.username}`}>
                        Profile
                    </Link>
                </li>
            */}

            <li onClick={ props.signout }>Log Out</li>
        </ul>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerDropdown);
