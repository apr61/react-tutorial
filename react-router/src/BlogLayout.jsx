import { Link, Outlet } from 'react-router-dom'

export function BlogLayout() {
    return (
        <>
            <ul>
                <li>
                    <Link to='/blogs/1'>Blog 1</Link>
                </li>
                <li>
                    <Link to='/blogs/2'>Blog 2</Link>
                </li>
                <li>
                    <Link to='/blogs/3'>Blog 3</Link>
                </li>
                <li>
                    <Link to='/blogs/newBlog'>New Blog</Link>
                </li>
            </ul>
            {/* passing outlet context */}
            <Outlet context={ {msg:"Hello Blogger"} } />
        </>
    )
}