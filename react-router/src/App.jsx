
import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import {BlogRoutes} from './BlogRoutes'
import Contact from './pages/Contact'



function App() {
	// Routing using useRoute() hook
	let element = useRoutes([
		{
			path : '/contact',
			element : <Contact />
		}

	])
	return (
		<>
			
			{/* having different routes for same path */}
			<Routes>
				<Route path='/blogs' element={<h2>Extra Content for Blogs</h2>}/>
			</Routes>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
				</ul>
			</nav>
			
			<Routes>
				{/* element based routing */}
				<Route path='/' element={<h2>Home</h2>} />

				{/* Component based routing */}
				<Route path='/about' element={<About />} />

				{/* Dynamic routing */}
				{/* <Route path='/blogs' element={<Blogs />} /> */}
				{/* <Route path='/blogs/:id' element={<Blog />} />
				<Route path='/blogs/newBlog' element={<NewBlog />} /> */}

				{/* 404 error page */}
				<Route path='*' element={<Error />} />

				{/* route nesting and using layouts */}
				{/* <Route path='/blogs' element={<BlogLayout />}>
					<Route index element={<Blogs />} />
					<Route path=':id' element={<Blog />} />
					<Route path='newBlog' element={<NewBlog />} />
				</Route> */}

				{/* separating Routes */}
				<Route path='/blogs/*' element={<BlogRoutes />} />
			</Routes>
			{element}

		</>

	);
}

export default App;
