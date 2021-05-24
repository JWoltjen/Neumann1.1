import React from 'react'

function Footer() {
    return (
        <div className='Navbar sticky bottom-0 max-w-7xl mx-auto py-3 hover:bg-white'>
            <ul>
                <span className="flex flex-row justify-evenly flex-wrap footer-font">
                    <li>
                        Email: Jeff.Woltjen@gmail.com
                    </li>
                    <li>
                        <a className='footer-font' href="https://jeffsportfolio.netlify.app/post">Portfolio</a>
                    </li>
                </span>
            </ul>
        </div>
    )
}

export default Footer
