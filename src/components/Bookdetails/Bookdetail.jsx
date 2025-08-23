import { BsListNested } from "react-icons/bs";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToReadList } from "../addtoread/addTodo";


const Bookdetail = () => {
    const navigate = useNavigate()
    const params = useParams()
    const data = useLoaderData()
    const id = parseInt(params.bookdetail)
    const book = data.find((item) => item.bookId == id)
    const { bookName, author, image, review, category, yearOfPublishing, rating, publisher, tags, totalPages,bookId } = book
    const handleMarkRead =  (id)=> {
        addToReadList(id)
    }
    return (

        <div className=" flex flex-col md:flex-row ld:flex-row w-[1000px] items-center gap-2 mt-10 mx-auto " >
            <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl w-[30%]"
            />
            <div className="bg-gray-200 w-[60%] p-7 rounded-2xl">
                <h1 className="text-3xl font-semibold">{bookName}</h1>
                <h1>By :{author}</h1>
                <div className="h-[0.5px] bg-gray-300 mt-2"></div>
                <div className="flex gap-1 ">

                    <p className="font-semibold  "> Review:  </p>
                    <span className="text-start"> {review} </span>
                </div>
                <p className="py-6 flex gap-3 items-center">
                    <p className="font-semibold">Tag : </p>
                    {
                        tags.map((tag) => <button class="btn btn-soft btn-accent">{tag}</button>)
                    }

                </p>
                <div className="h-[0.5px] bg-gray-300 my-3"></div>
                <p> Number of Pages :<span className="font-semibold"> {totalPages} </span>    </p>
                <p> publisher : <span className="font-semibold"> {publisher} </span> </p>
                <p> Year of Publishing : <span className="font-semibold"> {yearOfPublishing} </span>   </p>
                <p> Rating : <span className="font-semibold"> {rating} </span> </p>
                <div className="flex gap-3 justify-center">
                      <button onClick={()=>handleMarkRead(bookId)} className="btn btn-neutral btn-outline">Read </button>
                      <button className="btn btn-active btn-success text-white">Wishlist</button>
                  <button onClick={()=>navigate(-1)} className="btn btn-error text-white">Back</button>
                </div>

            </div>
        </div>

    );
};

export default Bookdetail;