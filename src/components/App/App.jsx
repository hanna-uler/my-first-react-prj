import css from "./App.module.css";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../../articles-api";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import NotFound from "../../pages/NotFound";
import clsx from 'clsx';
import ProductDetails from "../../pages/ProductDetails";

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};
  
export default function App() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		async function fetchArticles() {
			try {
				setLoading(true);
				const data = await fetchArticlesWithTopic("react");
				setArticles(data);
				
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setLoading(false);
			}

		}
		fetchArticles();
	}, [])
	return (
		<div className={css.container}>
			<h1>Some practice</h1>
			<div className={css.moduleBlock}>
				<h2>Module 1. The Very Beginning</h2>
				<h3>Best selling</h3>
				<Product />
				<Product />
			</div>
			<div className={css.moduleBlock}>
				<h2>Module 4. HTML requests</h2>
				<h3>Latest articles</h3>
				{loading && <p>Loading data, please wait...</p>}
				{error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
				{articles.length > 0 && <ArticleList articles={articles}/> }
			</div>
			<div className={css.moduleBlock}>
				<h3>Module 5. Routes</h3>
				<nav className={css.nav}>
					<NavLink to="/" className={buildLinkClass}>
						Home
					</NavLink>
					<NavLink to="/about" className={buildLinkClass}>
						About
					</NavLink>
					<NavLink to="/products" className={buildLinkClass}>
						Products
					</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
 	);
}
