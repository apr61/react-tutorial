import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import NewBlog from './pages/NewBlog'
import { BlogLayout } from './BlogLayout';

export function BlogRoutes() {
    return (
        <>
            <Routes>
                <Route element={<BlogLayout />}>
                    <Route index element={<Blogs />} />
                    <Route path=':id' element={<Blog />} />
                    <Route path='newBlog' element={<NewBlog />} />
                </Route>
            </Routes>
        </>
    )
}