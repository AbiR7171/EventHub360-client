import Container from "@/components/Container";
import NewPackages from "./NewPackages";
import PopularServices from "./PopularServices";

const Banner = () => {
    return (
        <div className="bg-primary">
              <Container>
                    <NewPackages/>
                    <PopularServices/>
              </Container>
        </div>
    );
};

export default Banner;