import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Tags } from '@tryghost/helpers-gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { InlineShareButtons } from 'sharethis-reactjs'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

import MailchimpComponent from '../components/common/Mailchimp'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
	const post = data.ghostPost

	return (
		<>
			<MetaData
				data={data}
				location={location}
				type="article"
			/>
			<Helmet>
				<style type="text/css">{`${post.codeinjection_styles}`}</style>
			</Helmet>
			<Layout>
				<div className="container content-top">
					<ins class="adsbygoogle"
						data-ad-client="ca-pub-7017426929740089"
						data-ad-slot="5357438199"
						data-ad-format="auto"
						data-full-width-responsive="true"></ins>
				</div>
				<div className="container content-post">
					<article className="content">

						<header class="post-full-header">
							{post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
							<h1 className="content-title">{post.title}</h1>
							<p class="post-full-custom-excerpt">{post.excerpt}</p>
							<div className="post-full-byline-meta">
								<div>
									<ul class="author-list">
										<li class="author-list-item">
											<div class="author-card">
												{post.primary_author.profile_image ?
													<img className="author-avatar" src={post.primary_author.profile_image} alt={post.primary_author.name} /> :
													<img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name} />
												}
											</div>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="author-name">{post.primary_author.name}</h4>
									<span className="byline-meta-date">{post.created_at_pretty}</span>
								</div>
							</div>
						</header>

						{post.feature_image ?
							<figure className="post-feature-image">
								<img src={post.feature_image} alt={post.title} />
							</figure> : null}

						<section className="post-full-content">
							{/* The main post content */}
							<section
								className="content-body load-external-scripts"
								dangerouslySetInnerHTML={{ __html: post.html }}
							/>
						</section>


						<section className="post-share">
							<InlineShareButtons
								config={{
									alignment: 'center',    // alignment of buttons (left, center, right)
									color: 'social',      // set the color of buttons (social, white)
									enabled: true,        // show/hide buttons (true, false)
									font_size: 14,        // font size for the buttons
									labels: 'cta',        // button labels (cta, counts, null)
									language: 'es',       // which language to use (see LANGUAGES)
									networks: [           // which networks to include (see SHARING NETWORKS)
										'facebook',
										'twitter',
										'whatsapp'
									],
									padding: 12,          // padding within buttons (INTEGER)
									radius: 4,            // the corner radius on each button (INTEGER)
									show_total: true,
									size: 40,             // the size of each button (INTEGER)

									// OPTIONAL PARAMETERS
									url: post.url, // (defaults to current url)
									title: post.title,            // (defaults to og:title or twitter:title)
									message: post.excerpt,     // (only for email sharing)
									subject: post.title,  // (only for email sharing)
									username: 'todoconta' // (only for twitter sharing)
								}}
							/>
						</section>

						<section className="suscribe">
							<div className="suscribe-content">
								<MailchimpComponent />
							</div>
						</section>

						<section className="comments">
							<section className="post-comments">
								<DiscussionEmbed
									shortname='todoconta'
									config={{
										url: post.url,
										identifier: post.id,
										title: post.title,
									}}
								/>
							</section>
						</section>
					</article>
				</div>
			</Layout>
		</>
	)
}

Post.propTypes = {
	data: PropTypes.shape({
		ghostPost: PropTypes.shape({
			codeinjection_styles: PropTypes.object,
			title: PropTypes.string.isRequired,
			html: PropTypes.string.isRequired,
			feature_image: PropTypes.string,
		}).isRequired,
	}).isRequired,
	location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`