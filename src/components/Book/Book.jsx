
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId, bookName, tags, author, image, review ,publisher} = book

    return (
       <Link to={`/books/${bookId}`}>
         <div className="card bg-base-100 w-full md:w-96 lg:w-96 ">
            <figure className="h-[300px] p-3  rounded-4xl">
                <img
                    src={image} />
            </figure>
            <div className=" flex items-center mt-6 gap-4 justify-center">
                {
                    tags.map((tag,idx) => <div>
                        <button key={idx} className="btn btn-outline btn-accent">{tag}</button>

                    </div>)
                }
            </div>

            <div className="card-body">
                <h2 className="font-bold text-[20px] text-center">
                    By : {author}
                </h2>
                <p className="text-justify font-semibold ">{review}</p>
               <div className="flex  justify-center items-center">
                 <p className="font-bold ">{publisher}</p>
                 <FaRegStar className="text-[15px]" />

               </div>
            </div>
        </div>
       </Link>
    );
};

export default Book; 