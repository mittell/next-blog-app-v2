import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Blog App</title>
				<meta
					name='description'
					content='A Blog App built with React and Markdown'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h2>Test</h2>
		</div>
	);
}
