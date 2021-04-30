export default function Story(props) {
    const img = "assets/img/"+props.usuario+".svg";
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}