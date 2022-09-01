import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Head from 'next/head';

export default function Home({ posts }) {
	console.log(posts);
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

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'));

	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts,
		},
	};
}
