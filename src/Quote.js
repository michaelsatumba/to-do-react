import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Quote.css';

function Quote() {
	const [quoteData, setQuoteData] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://type.fit/api/quotes');
			const data = await response.json();

			const randomQuote = Math.floor(Math.random() * data.length) + 1;
			setQuoteData({
				text: data[randomQuote].text,
				author: data[randomQuote].author,
			});
			setIsLoading(false);
			return data;
		};

		fetchData();
	}, []);

	return (
		<div className="quoteContainer">
			{isLoading ? (
				<CircularProgress />
			) : (
				<>
					<p>{quoteData.text}</p>
					<p>"{quoteData.author}"</p>
				</>
			)}
		</div>
	);
}

export default Quote;
