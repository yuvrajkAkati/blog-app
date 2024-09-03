import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup} from './pages/Signup'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import {WriteBlog} from './pages/WriteBlog'
import { LandingPage } from './pages/LandingPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path='/publish' element={<WriteBlog></WriteBlog>}></ Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App