import { TopBar } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';

export default function AppTopBar() {
    const [name, setName] = useState(localStorage.getItem('name') || "Nguyen Van A");
    const [email, setEmail] = useState(localStorage.getItem('email') || "nguyenvana@gmail.com");
    const [userMenu, setUserMenu] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleUserMenuToggle = () => {
        setUserMenu((prev) => !prev);
    };

    const handleSearchFieldChange = useCallback((value) => {
        setSearchValue(value);
        setSearchActive(value.length > 0);
    }, []);

    const userMenuMarkup =
        name && email ? (
            <TopBar.UserMenu
                name={email.split('@')[0]}
                initials={name.charAt(0).toUpperCase()}
                detail={name}
                open={userMenu}
                onToggle={handleUserMenuToggle}
            />
        ) : null;

    const searchFieldMarkup = (
        <TopBar.SearchField
            onChange={handleSearchFieldChange}
            value={searchValue}
            placeholder="Search"
        />
    );

    useEffect(() => {
        window.addEventListener('storage', () => {
            setName(localStorage.getItem('name') || "Nguyen Van A");
            setEmail(localStorage.getItem('email') || "nguyenvana@gmail.com");
        }, false);
    }, [])

    return (
        <TopBar
            showNavigationToggle
            userMenu={userMenuMarkup}
            searchResultsVisible={searchActive}
            searchField={searchFieldMarkup}
        />
    );
}