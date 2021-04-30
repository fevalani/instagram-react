import IonIcon from "./IonIcon";


const post = [{profile: "meowed" , postImg: "gato-telefone", likes: "101.523", liker: "respondeai"},
            {profile: "barked" , postImg: "dog", likes: "99.159", liker: "adorable_animals"}];

export default function Posts() {
    return (
        <div class="posts">
            {post.forEach()}
            <Post />
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/meowed.svg" />
                    meowed
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/barked.svg" />
                    barked
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={"assets/img/"+ props.profile +".svg"} />
                {props.profile}
                </div>
                <div class="acoes">
                <IonIcon name="ellipsis-horizontal" />
                </div>
            </div>

            <div class="conteudo">
                <img src={"assets/img/"+ props.postImg +".svg"} />
            </div>

            <div class="fundo">
                <div class="acoes">
                <div>
                    <IonIcon name="heart-outline" />
                    <IonIcon name="chatbubble-outline" />
                    <IonIcon name="paper-plane-outline" />
                </div>
                <div>
                    <IonIcon name="bookmark-outline" />
                </div>
                </div>

                <div class="curtidas">
                <img src={"assets/img/"+ props.liker +".svg"} />
                <div class="texto">
                    Curtido por <strong>{props.liker}</strong> e <strong>outras {props.likes} pessoas</strong>
                </div>
                </div>
            </div>
        </div>
    );
}