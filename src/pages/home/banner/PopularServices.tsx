import { Button } from "@/components/ui/button";
import corporateImage from "../../../assets/Photos/Rectangle 5 (2).png"
import { Icon } from '@iconify/react';


const PopularServices = () => {
    return (
        <div className="col-span-5 bg-[#000000] px-16 py-8 h-full">
              

              <div>
              <h1 className="text-2xl text-white text-center">Our most popular services</h1>

<hr className="border text-white mb-3 mt-3" />

<img src={corporateImage} className="h-48 w-full" alt="" />



<ul className="space-y-5">
              
              <li> <h1 className="text-3xl text-white mt-8">Corporate event</h1></li>

     <li className="flex items-center gap-2" >
        <span className="border-0 bg-white/10 size-5 rounded-full text-green-500 flex items-center justify-center"><Icon icon="dashicons:yes"  className="size-3" /></span>
        <span className="text-[18px] text-white">One day pas access all lecture</span>
    </li>

    <li className="flex items-center gap-2" >
        <span className="border-0 bg-white/10 size-5 rounded-full text-green-500 flex items-center justify-center"><Icon icon="dashicons:yes"  className="size-3" /></span>
        <span className="text-[18px] text-white">One day pas access all lecture</span>
    </li>

    <li className="flex items-center gap-2" >
        <span className="border-0 bg-white/10 size-5 rounded-full text-green-500 flex items-center justify-center"><Icon icon="dashicons:yes"  className="size-3" /></span>
        <span className="text-[18px] text-white">One day pas access all lecture</span>
    </li>

    <li className="flex items-center gap-2" >
        <span className="border-0 bg-white/10 size-5 rounded-full text-green-500 flex items-center justify-center"><Icon icon="dashicons:yes"  className="size-3" /></span>
        <span className="text-[18px] text-white">One day pas access all lecture</span>
    </li>

</ul>

<Button className="mt-8">View Details</Button>
              </div>
              
        </div>
    );
};

export default PopularServices;