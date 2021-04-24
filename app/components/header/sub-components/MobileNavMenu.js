import React from 'react';
import Link from 'next/link';

const MobileNavMenu = () => {
    return (
        <nav className='offcanvasNavigation' id='offcanvas-navigation'>
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li className="menuItemHasChildren">
                    <Link href='/service'><a>Service</a></Link>
                    <ul className="subMenu">
                        <li>
                            <Link href='/service'><a>Service Page</a></Link>
                        </li>
                        <li>
                            <Link href='/service-details'>
                                <a>Service Details</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menuItemHasChildren">
                    <Link href='/blog'>News</Link>
                    <ul className="subMenu">
                        <li>
                            <Link href='/blog'><a>Blog Page</a></Link>
                        </li>
                        <li>
                            <Link href='/blog-right-sidebar'>
                                <a>Blog Right Sidebar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog-post'>
                                <a>Blog Details</a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};

export default MobileNavMenu;