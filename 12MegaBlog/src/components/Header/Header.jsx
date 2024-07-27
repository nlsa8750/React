import React from 'react'
import { LogoutBtn, Container, Logo } from '../index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/authSlice';

function Header() {

    // the values are stored inside the store so you can fetch the value of status(default : false) which has already been dispatch through the reducer
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    // the reason we use array is because usually everytime the new value is inserted, new button will be created and that new button needs to be inserted one by one but in corporate world, we created array which contains tons of object and the value inside the object will be added into the naivigation bar therefore more optimal  

    // only those object will be displayed whose active status will be true
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className='py-3 shadow bg-indigo-400'>
            {/* navigation bar is contained inside the container tag */}
            <Container>
                <nav className='flex'>
                    <div className='mr-4 '>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li key='logout'>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header; 