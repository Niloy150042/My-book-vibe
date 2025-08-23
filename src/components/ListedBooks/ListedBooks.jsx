
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadListFromStorage } from '../addtoread/addTodo';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';
const ListedBooks = () => {
    const [books, setBooks] = useState([])
    const allbooks = useLoaderData()
    const readedBooks = getReadListFromStorage()

    useEffect(() => {
        const myReadBooklist = allbooks.filter((book) => readedBooks.includes(book.bookId))
      
        setBooks(myReadBooklist)
       
    }, [])


    return (
        <Tabs>
            <TabList>
                <Tab>Read-List</Tab>
                <Tab>Wishlist</Tab>
            </TabList>

            <TabPanel>
                <h2 className='grid grid-cols-3 py-4'> {books.map((book)=><Book book={book} ></Book>)}  </h2>
            </TabPanel>
            <TabPanel>
                <h2>jei boikhana tumi wish koreso</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ListedBooks;