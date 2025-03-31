import { Outlet } from "react-router-dom"

type Props = {
    children: any,
}

const ProductLayout = ({children} : Props) => {
    return (
        <div className="productGrid">
            {children}
        </div>
    )
}

export default ProductLayout;