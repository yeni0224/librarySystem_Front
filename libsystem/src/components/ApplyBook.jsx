import { useState } from "react";

function ApplyBook(){
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [publisher, setPublisher] = useState();

    return (<div>
        <h2>책 등록</h2>
        <input placeholder="제목" value={title}
        onChange={(e)=>setTitle(e.target.value)}/><br/>
        <input placeholder="작가" value={author}
        onChange={(e)=>setAuthor(e.target.value)}/><br/>
        <input placeholder="출판사" value={publisher}
        onChange={(e)=>setPublisher(e.target.value)}/><br/>
    </div>);
}export default ApplyBook;