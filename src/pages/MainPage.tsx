
import PostItem from '../components/posts/Postitem.tsx'
import { useAppSelector } from '../hooks/typedHooks.ts'


const MainPage = () => {
  const posts = useAppSelector(state => state.posts.postList)

  return (
    <>
      {posts.map(post =>
        <PostItem key={post.id}
        image={post.image}
        ownerId={post.ownerId}
        text={post.text}
        title={post.title}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
        avatar={post.owner.avatar}
        owner={post.owner.name} 
        tagsTitle={post.title}   />
      )}
      {!posts.length && <p>Постов нет</p>}
    </>
  )
}
export default MainPage