import { useEffect, useState } from "react";
import { getBook, updateBook } from "../book";
import {useParams, useNavigate} from "react-router-dom";

function EditBook(){
    const {id} = useParams();
    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [publisher, setPublisher] = useState("");

    useEffect(()=>{getBook(id).then((data)=>{
        setTitle(data.Book_Title);
        setAuthor(data.setAuthor);
    })},[]);

    const handleSubmit = async()=>{
        await updateBook(id, {title, author});
        nav(`/books/${id}`);
    }

    return(<div>
        <h2>수정</h2>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)}/><br/>
        <input value={year} onChange={(e)=>setYear(e.target.value)}/><br/>
        <input value={publisher} onChange={(e)=>setPublisher(e.target.value)}/><br/>
    </div>)
}
export default EditBook;