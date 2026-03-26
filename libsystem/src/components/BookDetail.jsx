//특정 책 상세보기 출력
import { useEffect,useState } from "react"
import { getBook } from "../book"
import {useParams, Link} from "react-router-dom";

const BookDetail=()=>{
    const {id} = useParams();
    const [book, setBook] = useState(null);

    useEffect(()=>{getBook(id).then(setBook)},[]);
    if(!book) return <div>로딩 중...</div>;
    return(<div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.publisher}</p>
        <Link to='/books'>목록으로 이동</Link>
    </div>)
}
export default BookDetail