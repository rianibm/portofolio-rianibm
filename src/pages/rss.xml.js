import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const works = await getCollection('works');
	const posts = await getCollection('posts');
	const items = [
		...works.map((post) => ({
			...post.data,
			link: `/works/${post.id}/`,
		})),
		...posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
