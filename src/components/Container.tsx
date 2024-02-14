import { ReactNode } from "react";

type TContainerChildren = {
     className?: string,
     children: ReactNode
}


const Container = ({className, children} : TContainerChildren) => {
    return (
        <div className={`w-full max-w-[1230px] p-10 mx-auto ${className as string}`}>
            {children}
        </div>
    );
};

export default Container;