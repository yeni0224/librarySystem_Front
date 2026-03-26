import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter><Routes>
        <Route path='/books' element={<BookList/>}/>
        <Route path='/books/new' element={<ApplyBook/>}/>
        <Route path='/books/create' element={<SaveBook/>}/>
        <Route path='/books/:id' element={<BookDetail/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/update/:id' element={<UpdateBook/>}/>
        {/*로그인 시 접속할 수 있도록*/}
        {/*뉴스 크롤링*/}
        {/*일정관리(다이어리)*/}
        </Routes></BrowserRouter>
    </>
  )
}

export default App
