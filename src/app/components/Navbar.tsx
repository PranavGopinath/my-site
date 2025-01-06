"use client"
export const Navbar = () => {
    return (
        <>
            <style jsx>{`
                .nav-item {
                    position: relative;
                    padding: 10px;
                    cursor: pointer;
                }

                .nav-item span {
                    position: relative;
                    z-index: 1;
                }

                .nav-item::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background-color: white;
                    transition: all 0.3s ease-in-out;
                    transform: translateX(-50%);
                }

                .nav-item:hover::after {
                    width: 100%;
                    left: 0;
                    transform: translateX(0%);
                }
            `}</style>
            <div className='bg-transparent text-white top-0 z-50 h-20 w-screen important sticky flex flex-row items-center justify-evenly'>
                <div className='nav-item'><span>About</span></div>
                <div className='nav-item'><span>Experience</span></div>
                <div className='nav-item'><span>Projects</span></div>
                <div className='nav-item'><span>Contact</span></div>
            </div>
        </>
    )
}
