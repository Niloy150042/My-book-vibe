const Bnner = () => {
    return (
        <div className="hero bg-gray-200 h-[500px]">
            <div className="flex flex-col md:flex-row-reverse justify-between  lg:flex-row-reverse items-center p-10">
                <img
                    src="/src/assets/images/reading-book.jpg"
                    className="max-w-[500px] rounded-4xl shadow-2xl  "
                />


                <div className="w-full md:w-[60%] lg:w-[40%]  flex flex-wrap flex-col items-center  text-center">
                    <h1 className="text-5xl font-bold py-3 ">Books to freshen Up  your bookshelf</h1>
                    <button className="btn btn-success hidden md:visible lg:visible text-white my-5 " > Explore books </button>

                </div>
            </div>
        </div>
    );
};

export default Bnner;