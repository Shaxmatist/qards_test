export const settingsCollection = {
	name  : 'settings',
	label : 'Settings',
	delete: false,
	editor: {
		preview: false
	},
	files : [{
		name       : 'general',
		label      : 'Site Settings',
		file       : 'static/config/settings.json',
		description: 'General site settings',
		fields     : [{
			label : 'Site settings',
			name  : 'site',
			widget: 'object',
			fields: [
				{
					label : 'Name',
					name  : 'name',
					widget: 'string'
				}, {
					label : 'Title',
					name  : 'title',
					widget: 'string'
				}, {
					label : 'Excerpt',
					name  : 'excerpt',
					widget: 'text'
				}, {
					label : 'Base url',
					name  : 'base_url',
					widget: 'string'
				}, {
					label : 'Social media share image',
					name  : 'social_share_img',
					widget: 'image'
				}
			]
		}]
	}, {
		name       : 'posts',
		label      : 'Posts',
		file       : 'static/config/posts.json',
		description: 'Posts related settings',
		fields     : [{
			label : 'Post Settings',
			name  : 'posts',
			widget: 'object',
			fields: [{
				label : 'Number of posts on frontpage',
				name  : 'front_limit',
				widget: 'number'
			}, {
				label  : 'Show post scroll progress?',
				name   : 'post_progress_show',
				widget : 'boolean',
				hint   : `When scrolling a post, a progress bar 
					indicating the current position in page will be 
					shown on the bottom of the page`,
				default: true
			}, {
				label  : 'Show table of contents?',
				name   : 'post_toc_show',
				widget : 'boolean',
				default: true
			}, {
				label  : 'Show social media share buttons?',
				name   : 'post_social_show',
				widget : 'boolean',
				default: true
			}, {
				label  : 'Show subscribe box?',
				name   : 'post_subscribe_show',
				widget : 'boolean',
				default: true
			}]
		}]
	}, {
		name       : 'plugins',
		label      : 'Plugins',
		file       : 'static/config/plugins.json',
		description: 'Enable/disable and config various plugins',
		fields     : [{
			label : 'Tracking',
			name  : 'tracking',
			widget: 'object',
			fields: [{
				label : 'Enable google analytics',
				name  : 'tracking_enable_google_analytics',
				widget: 'boolean'
			}, {
				label : 'Google analytics tracking ID',
				name  : 'tracking_google_analytics_id',
				widget: 'string'
			}]
		}, {
			label : 'Email subscribers',
			name  : 'email_subscribers',
			widget: 'object',
			fields: [{
				label : 'Enable email subscribers?',
				name  : 'email_subscribers_enable',
				widget: 'boolean'
			}, {
				label : 'Mailchimp',
				name  : 'email_subscribers_mailchimp',
				widget: 'object',
				fields: [{
					label : 'Mailchimp list endpoint',
					name  : 'email_subscribers_mailchimp_endpoint',
					widget: 'string'
				}]
			}]
		}]
	}]
};

export const authorsCollection = {
	name          : 'authors',
	preview       : true,
	label         : 'Authors',
	label_singular: 'Author',
	folder        : 'static/content/collections/authors',
	create        : true,
	allow_add     : false,
	fields        : [{
		label : "Name",
		name  : "title",
		widget: 'string'
	}, {
		label  : 'Excerpt',
		name   : 'excerpt',
		widget : 'markdown',
		buttons: [
			'bold',
			'italic',
		]
	}, {
		label : "Avatar",
		name  : "avatar",
		widget: 'image'
	}]
};

export const categoriesCollection = {
	name          : 'categories',
	preview       : false,
	label         : 'Categories',
	label_singular: 'Category',
	folder        : 'static/content/collections/categories',
	create        : true,
	allow_add     : false,
	fields        : [{
		label : 'Tag',
		name  : 'title',
		widget: 'string'
	}, {
		label : 'Excerpt',
		name  : 'excerpt',
		widget: 'text'
	}, {
		label   : 'Header Image',
		name    : 'header',
		widget  : 'object',
		required: false,
		fields  : [{
			label   : 'Image',
			name    : 'image',
			widget  : 'image',
			required: false
		}, {
			label   : 'Alt text',
			name    : 'alt',
			widget  : 'string',
			required: false
		}, {
			label : 'Meta',
			name  : 'meta',
			widget: 'object',
			fields: [{
				label   : 'Meta keywords',
				name    : 'keywords',
				widget  : 'string',
				required: false
			}, {
				label   : 'Meta description',
				name    : 'description',
				widget  : 'string',
				required: false,
				hint    : 'If left empty we will use the excerpt insteads'
			}]
		}]
	}]
};

export const postsCollection = {
	name          : 'posts',
	label         : 'Posts',
	label_singular: 'Post',
	folder        : 'static/content/collections/posts',
	create        : true,
	slug          : '{{slug}}',
	sort          : "created_at:desc",
	fields        : [{
		label : 'Title',
		name  : 'title',
		widget: 'string'
	}, {
		label : 'Publish Date',
		name  : 'created_at',
		widget: 'datetime'
	}, {
		label  : 'Body',
		name   : 'body',
		widget : 'markdown',
		buttons: [
			'bold',
			'italic',
			'link',
			'quote',
			'bulleted-list',
			'numbered-list'
		]
	}, {
		label : 'Tags',
		name  : 'tags',
		widget: 'list',
		hint  : 'Comma separated list of tags'
	}, {
		//	currently Netlify-CMS does not allow for a 1-m relation
		//	but they will implement so I'll let this field on the
		//	"plural" side until we can do something and add more
		//	authors to a post
		label        : 'Authors',
		name         : 'authors',
		widget       : 'relation',
		collection   : 'authors',
		searchFields : ['title'],
		valueField   : 'title',
		displayFields: ['title']
	}, {
		label        : 'Categories',
		name         : 'categories',
		widget       : 'relation',
		collection   : 'categories',
		searchFields : ['title', 'excerpt'],
		valueField   : 'title',
		displayFields: ['title']
	}, {
		label : 'Meta',
		name  : 'meta',
		widget: 'object',
		fields: [{
			label   : 'Meta keywords',
			name    : 'keywords',
			widget  : 'string',
			required: false
		}, {
			label   : 'Meta description',
			name    : 'description',
			widget  : 'string',
			required: false,
			hint    : 'If left empty we will use the excerpt instead'
		}]
	}, {
		label   : 'Is page?',
		name    : 'isPage',
		widget  : 'boolean',
		required: false,
		default : false
	}, {
		label   : 'Is featured?',
		name    : 'isFeatured',
		widget  : 'boolean',
		required: false,
		default : false
	}, {
		label   : 'Hero',
		name    : 'hero',
		widget  : 'object',
		required: false,
		fields  : [{
			label   : 'Image',
			name    : 'image',
			widget  : 'image',
			required: false
		}, {
			label   : 'Alt text',
			name    : 'alt',
			widget  : 'string',
			required: false
		}]
	}, {
		label : 'Excerpt',
		name  : 'excerpt',
		widget: 'text'
	}]
};