import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {option_name,price, features}= option;
    return (
        <div className='bg-blue-300 rounded-lg mx-4 my-7 px-4 py-5 text-center flex flex-col'>
        <h2 className=''>
            <span className='text-4xl font-extrabold'>{price}</span>
            <span className='text-xl'>/month</span>
        </h2>
        <h3 className='text-3xl py-3'>{option_name}</h3>
        {/* <h4 className='text-2xl py-6'>{features}</h4> */}
        
       <div className='flex-grow'>
       {
        features.map((feature, idx)=> <Feature  key={idx} feature={feature}></Feature>)
       }
       <button className='bg-gray-400 w-full p-3 text-2xl font-bold rounded-2xl my-3 hover:bg-yellow-500'>Buy Now</button>
       </div>

        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}
export default PriceOption;