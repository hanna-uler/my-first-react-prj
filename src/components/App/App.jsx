import Product from "../Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../../articles-api";

export default function App() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		async function fetchArticles() {
			try {
				setLoading(true);
				const data = await fetchArticlesWithTopic("react"); console.log(response);
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
		<div>
			<h1>Best selling</h1>
			<Product />
 			<Product />
			<h1>Latest articles</h1>
			{loading && <p>Loading data, please wait...</p>}
			{error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
			{articles.length > 0 && <ArticleList articles={articles}/> }
		</div>
 	);
}
