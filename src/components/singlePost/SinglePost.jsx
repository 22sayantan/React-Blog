import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                  <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Devil</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime quis
                 aperiam dolor dolores adipisci recusandae voluptatibus saepe tenetur culpa
                 aut sequi repudiandae quia veniam sint possimus dolorum. Quisquam, illo.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime quis
                 aperiam dolor dolores adipisci recusandae voluptatibus saepe tenetur culpa
                 aut sequi repudiandae quia veniam sint possimus dolorum. Quisquam, illo.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime quis
                 aperiam dolor dolores adipisci recusandae voluptatibus saepe tenetur culpa
                 aut sequi repudiandae quia veniam sint possimus dolorum. Quisquam, illo.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime quis
                 aperiam dolor dolores adipisci recusandae voluptatibus saepe tenetur culpa
                 aut sequi repudiandae quia veniam sint possimus dolorum. Quisquam, illo.
            </p>
        </div>
    </div>
  )
}
