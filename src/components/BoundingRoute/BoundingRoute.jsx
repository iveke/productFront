import { useSelector } from "react-redux";
import { selectorChanging } from "../../redux/selectors";
import { Navigate } from "react-router-dom";

export const BoundingRoute = ({redirect, component: Component}) => {
    const  changing = useSelector(selectorChanging);

    return changing ? <Component /> : <Navigate to={redirect}/>
}