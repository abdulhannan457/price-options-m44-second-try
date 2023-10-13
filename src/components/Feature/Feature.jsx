import PropTypes from 'prop-types';
import { AiOutlineCheck } from "react-icons/ai";

const Feature = ({feature}) => {
    

    return (
        <div>
            <h2 className='flex gap-4 items-center'><AiOutlineCheck className='text-orange-500'></AiOutlineCheck> {feature}</h2>
        </div>
    );
};
Feature.propTypes = {
    feature:PropTypes.string
}
export default Feature;