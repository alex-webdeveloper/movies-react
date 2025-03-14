import { useState, useEffect, Suspense, lazy } from 'react';
import MoviesList from '../component/MoviesLists';
// const MoviesList = lazy(() => import('../component/MoviesLists'));

export default function Main({ movies, loading }) {
	return (
		<main className="container content">
			{loading ? <Loading /> : <MoviesList movies={movies} />}
		</main>
	);
}

function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}
function Loading() {
	return <h5>🌀 Loading...</h5>;
}
