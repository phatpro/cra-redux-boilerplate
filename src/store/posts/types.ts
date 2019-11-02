/** Hình dạng của một Post */
export interface Post {
	slug: string;
	id: string;
	uuid: string;
	title: string;
	html: string;
	comment_id: string;
	feature_image: string;
	featured: boolean;
	visibility: string;
	created_at: Date;
	updated_at: Date;
	published_at: Date;
	custom_excerpt: string;
	codeinjection_head: string;
	codeinjection_foot: string;
	custom_template: string;
	canonical_url: string;
	url: string;
	excerpt: string;
	reading_time: number;
	og_image: string;
	og_title: string;
	og_description: string;
	twitter_image: string;
	twitter_title: string;
	twitter_description: string;
	meta_title: string;
	meta_description: string;
}

/** Hình dạng của một danh sách Posts */
export type Posts = Record<string, Post>;

/** */
export type PostsState = {
	error: boolean;
	loading: boolean;
	data: Posts | null;
};
