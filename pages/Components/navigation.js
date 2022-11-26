import { Navbar } from "flowbite-react";

function Navigation() {
    return (
        <>
            
            <Navbar className="py-5 bg-transparent z-40" >
                <Navbar.Brand href="/">
                    <img
                        src="https://i.ibb.co/d0dBDFB/download.jpg"
                        className="mr-3 h-10 sm:h-16 rounded-full p-2"
                        alt="programming logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Shamima Akter
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/"> Home </Navbar.Link>
                    <Navbar.Link href="/">About</Navbar.Link>
                    <Navbar.Link href="/">Services</Navbar.Link>
                    <Navbar.Link href="/">Pricing</Navbar.Link>
                    <Navbar.Link href="/">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
