import corporateImage from "../../../assets/Photos/Rectangle 5 (2).png"
const PopularServices = () => {
    return (
        <div className="col-span-4">
                <h1>Our most popular services</h1>
                <hr />

                <img src={corporateImage} className="h-48 w-full" alt="" />
        </div>
    );
};

export default PopularServices;