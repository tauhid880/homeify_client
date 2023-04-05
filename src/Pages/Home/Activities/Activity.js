import React from 'react';

const Activity = ({activity}) => {

const {icon,title,description} = activity
   
    return (
        <div className="flex justify-start lg:justify-center w-full rounded-full font-jost">
            <div>
            <img src={icon} alt="icon" className='w-10 mr-5'/>
            </div>
            <div>
            <h6 className="mb-2 font-semibold leading-5 text-secondary text-xl sm:text-2xl">{title}</h6>
            <p className="mb-3 text-[16px] text-gray-900">
                {description}
            </p>
            </div>
        </div>
    );
};

export default Activity;