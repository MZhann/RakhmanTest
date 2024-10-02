import dish from '../../public/images/dish.png'

const InfoBlock = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center  justify-evenly bg-blue-700 h-96" >
            <div>
                <h1 className="text-3xl font-bold dinround">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aspernatur.{" "}
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quisquam aut veniam, sed animi perferendis.
                </p>
                <button className="px-3 h-[30px] dinround  bg-pink-400 rounded-3xl text-white">
                    beka
                </button>
                <button className="px-3 h-[30px] bg-green-500 rounded-3xl text-white">
                    beka
                </button>
            </div>
            <div><img src={dish} className='hidden sm:block' alt="" /></div>


            <div></div>

        </div>
    );
};


export default InfoBlock;
