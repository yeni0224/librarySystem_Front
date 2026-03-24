//모든 책 목록 표시 (테이블 형태 id,제목,저자,출판년도)
import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../book";
import {useNavigate} from "react-router-dom";

const BookList= ()=>{
    const [books, setBooks] = useState([]);
    const nav = useNavigate();
    
    return(<>
    <h1>모든 책</h1><hr/>
    
        </>)
}
export default BookList