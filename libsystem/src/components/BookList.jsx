//모든 책 목록 표시 (테이블 형태 id,제목,저자,출판년도)
import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../book";
import {useNavigate} from "react-router-dom";

const BookList= ()=>{
    const [books, setBooks] = useState([]);
    const nav = useNavigate();
    
    const load = async () =>{
        const data = await getBooks();
        setBooks(data);
    }
    useEffect(()=>{load()},[]);
    
    const handleDelete = async(id)=>{
        await deleteBook(id);
        load();
    }

    return(<>
    <h1>모든 책</h1><hr/>
    <button onClick={()=>nav("/books/create")}>책 등록</button>
    <ul style={{listStyle:"none", padding:0}}>
        {books.map((b)=>{
            <li key={b.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <div onClick={()=>nav(`/books/${b.id}`)} style={{cursor:"pointer", fontWeight:"bold"}}>
                    {b.title} | {b.author} <br/>
                    {b.publisher}</div>
        <div>
            <button onClick={()=>nav(`/books/edit/${b.isbn}`)}>수정</button>
            <button onClick={()=>handleDelete(b.isbn)}>삭제</button>
        </div>
            </li>
        })}
    </ul>
        </>)
}
export default BookList