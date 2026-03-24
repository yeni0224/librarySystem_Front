import axios from "axios";

const api = axios.create({
    baseURL:"http://127.0.0.1:8000",
    headers:{"Content-Type":"application/json"}
});

//전체 조회
export const getBooks = async ()=>{
    const res = await api.get("/books");
    return res.data;
}

//1개 조회
export const getBook = async (id)=>{
    const res = await api.get(`/books/${id}`);
    return res.data;
}

//생성
export const createBook = async (FormData) =>{
    const res = await api.post("/books", FormData,
        {headers:{"Content-Type":"multipart/form-data",}});
    return res.data;
}

//수정
export const updateBook = async (id,data)=>{
    const res = await api.put(`/books/${id}`, data);
    return res.data;
}

//삭제
export const deleteBook = async (id)=>{
    const res = await api.delete(`books/${id}`);
}