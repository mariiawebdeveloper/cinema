import React from "react";
import Link from "next/link";
import Image from 'next/image'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={'navbar'}>
            <div style={{display: "flex", alignItems: 'center'}}>
                <div><Image src='/clapperboard.png' alt="logo" width={35} height={35}/></div>
                <div>Fil</div>
                <div style={{color: "red"}}>moon</div>
            </div>
            <div className={"navbar-menu"}>
                <div>
                    <Link href="/src/components/Homepage">Home</Link>
                </div>
                <div>
                    <Link href="/contact">Contact</Link>
                </div>
                <div>
                    <Link href="/src/components/Movies">Movies</Link>
                </div>
                <div>
                    <Link href="/src/components/Mylist">My List</Link>
                </div>
                <div>
                    <div>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}

                        >
                            Account
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>  <Link href="/login">Log in</Link></MenuItem>
                            <MenuItem onClick={handleClose}> <Link href="/signup">Sign up</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
