import Link from 'next/link';

const Post = ({ post }) => {
	return (
		<div className='card'>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={post.frontmatter.cover_image} alt='' />
			<div className='post-date'>Posted on {post.frontmatter.date}</div>
			<h3>{post.frontmatter.title}</h3>
			<p>{post.frontmatter.excerpt}</p>
			<Link href={`/blog/${post.slug}`}>
				<a className='btn'>Read More</a>
			</Link>
		</div>
	);
};

export default Post;
