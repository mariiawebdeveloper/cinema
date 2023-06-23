import React from "react";
import Link from "next/link";
import Image from 'next/image'


const Navbar = () => {
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
                    <Link href="/src/components/Contacts">Contact</Link>
                </div>
                <div>
                    <Link href="/src/components/Movies">Movies</Link>
                </div>
                <div>
                    <Link href="/src/components/Mylist">My List</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
