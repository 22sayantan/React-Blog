import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img src="" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci eveniet ad ipsam
            eius necessitatibus natus obcaecati beatae aspernatur.Id voluptatibus veritatis asperiores
            excepturi. Dolor dolorem sequi rerum ex? Molestias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci eveniet ad ipsam
            eius necessitatibus natus obcaecati beatae aspernatur.Id voluptatibus veritatis asperiores
            excepturi. Dolor dolorem sequi rerum ex? Molestias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci eveniet ad ipsam
            eius necessitatibus natus obcaecati beatae aspernatur.Id voluptatibus veritatis asperiores
            excepturi. Dolor dolorem sequi rerum ex? Molestias.
        </p>
    </div>
  )
}
