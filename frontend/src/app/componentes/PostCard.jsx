import "./PostCard.css";
export default function PostCard() {
    return (


    <div className="post-card">
        {/* nome do usuario */}
        <h3 className="post-user">
        Nome do usuário
        </h3>

        {/*conteudo do post*/}
        
        <p className="post-content">
        como ter uma alimentação saúdevel .....
        </p>

        {/*data do post*/}
        <small className="post-date">
        Hoje as 14:00
        </small>


        {/* botao de intereção*/}
        <div className="post-actions">
            <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80"
        alt="Post"
        className="w-full h-64 object-cover rounded-md"
        />
        <button className="like-button">
            Curtir
        </button>
        <button className="comment-button">
            Comentar  
        </button>
        <button className="share-button">
            Compartilhar   
        </button>
        <button className="repost-button">
            Repostar
        </button>
        </div>



</div>
);


}