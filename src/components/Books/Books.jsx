import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const[books,setbooks] =useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setbooks(data))
    },[])
    return (
        <div>
            <div className="text-2xl text-center py-4 font-semibold "> ---- Books ---- </div>
             <div className="flex flex-wrap  justify-center items-center gap-10">
                {
                    books.map((book)=><Book book={book} key={book.bookId}></Book>)
                }
             </div>
        </div>
    );
};

export default Books;