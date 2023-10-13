import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions = [
        {
          "id": 1,
          "option_name": "Basic Membership",
          "description": "Access to gym facilities during standard hours (6 AM - 10 PM) on weekdays.",
          "price": 39.99,
          "validity_days": 30,
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Free fitness classes (2/week)"
          ]
        },
        {
          "id": 2,
          "option_name": "Premium Membership",
          "description": "Unlimited access to gym facilities at any time, including weekends.",
          "price": 59.99,
          "validity_days": 30,
          "features": [
            "24/7 gym access",
            "Access to all equipment and facilities",
            "Free fitness classes (unlimited)",
            "Personal trainer sessions (4/month)"
          ]
        },
        {
          "id": 3,
          "option_name": "Family Membership",
          "description": "Access for the entire family, unlimited usage during standard hours.",
          "price": 129.99,
          "validity_days": 30,
          "features": [
            "Access for 2 adults and 2 children",
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Free childcare services",
            "Family fitness classes (2/week)"
          ]
        },
    ]
    return (
       <>
        <h2 className="text-5xl">Best Prices in the Town</h2>
        <div  className="grid md:grid-cols-3 gap-3 m-12">
           
            {
                PriceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            } 

        </div>
        </>
    );
};

export default PriceOptions;