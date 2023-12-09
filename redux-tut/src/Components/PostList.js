import React from 'react'

export default function PostList(props) {
  return (
    <div>
  {props.posts && props.posts.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ))}
</div>

  )
}
