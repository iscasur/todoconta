import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Tags } from '@tryghost/helpers-gatsby'
import { DiscussionEmbed } from 'disqus-react'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

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
                <div className="container">
                    <article className="content">
                        
                        <header class="post-full-header">
                        {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                        <h1 className="content-title">{post.title}</h1>
                        <p class="post-full-custom-excerpt">{post.excerpt}</p>
                        <div className="post-full-byline">
                            <div className="post-card-avatar">
                                {post.primary_author.profile_image ?
                                    <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                    <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                                }
                            </div>
                            <span>{ post.primary_author.name }</span>
                            <span>{ post.date }</span>
                        </div>
                        </header>

                        { post.feature_image ?
                        <figure className="post-feature-image">
                            <img src={ post.feature_image } alt={ post.title } />
                        </figure> : null }

                        <section className="post-full-content">
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>

                        <section class="post-comments">
                        <DiscussionEmbed
                            shortname='todoconta'
                            config={ {
                                url: post.url,
                                identifier: post.id,
                                title: post.title,
                            } }
                        />
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
