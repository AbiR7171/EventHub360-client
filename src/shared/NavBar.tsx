import Container from "@/components/Container";

const NavBar = () => {
    return (
        <div className="bg-primary text-white">
             <Container className="flex items-center justify-between h-[24px]">

                    <p>EventHub360</p>

                    <ul className="flex items-center gap-7">
                         <li>Home</li>
                         <li>About</li>
                         <li>Contact</li>
                    </ul>

             </Container>
        </div>
    );
};

export default NavBar;