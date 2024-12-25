import './postitem.css'


// const postCard:Post =({

// });

interface PostItemProps {
ownerId:number,
text:string,
title: string,
image:string,
createdAt:string,
updatedAt:string,
avatar: Owner["avatar"]
owner: Owner["name"],
tagsTitle: Tag["tagTitle"],
}

export interface Owner {
  id: number,
  name: string,
  email: string,
  avatar?: string,
}

export interface Tag {
  id:number,
  tagTitle:string,
}

const PostItem = ({
owner,
title,
text,
avatar,
image,
tagsTitle,
 }: PostItemProps) => {

  return (
    <div className="post">  
      <img src={image} className="post__image"></img>
      <div className='post__content'>
        <h3>{title}</h3>
        <pre>{text}</pre>
        <img src={avatar} className='post__avatar'></img>
        <p className='post__owner'>{owner}</p>
        <p className='post__tags'>Tags:{tagsTitle}</p>
      </div>
    </div>
  );
};

export default PostItem

