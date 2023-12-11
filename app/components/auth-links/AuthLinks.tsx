"use client";
import { useState } from 'react';
import Link from 'next/link'
import { status } from '@/app/lib/placeholder-data';

import styles from './AuthLinks.module.css'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)



    const toggleMenu = () => {
        setOpen(!open)
    }

    const handleLogout = () => {
        // logout    }
    }

    return (
        <>
            {status !== "authenticated" ? (
                <>
                    <Link href="/write" className={styles.link}>Write</Link>
                    <span className={styles.link} onClick={handleLogout}>
                        Logout
                    </span>
                </>
            ) : (
                <>
                    <Link href="/login" className={styles.link}>Login</Link>
                </>

            )}

            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>

            {open && (
                <div className={styles.mobileMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    {status !== "authenticated" ? (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link} onClick={handleLogout}>Logout</span>
                        </>
                    ) : (
                        <>

                            <Link href="/login">Login</Link>
                        </>

                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks