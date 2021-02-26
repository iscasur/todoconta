import React from 'react'
import Disqus, { DiscussionEmbed } from 'disqus-react'

const Disqus = () => (
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
)

export default Disqus;