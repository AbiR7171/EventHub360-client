import Container from "@/components/Container";
import NewPackages from "./NewPackages";
import PopularServices from "./PopularServices";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="bg-primary">
              <Container className="grid grid-cols-12">
                    <NewPackages/>
                    <PopularServices/>
              </Container>
        </div>
    );
};

export default Banner;