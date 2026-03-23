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
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
