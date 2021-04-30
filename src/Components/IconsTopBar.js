import IonIcon from "./IonIcon";

export default function IconsTopBar(props) {
    if(props.class === "logo"){
        return (
            <div class={props.class}>
                <IonIcon name="logo-instagram" />
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>
        );
    } else if(props.class === "logo-mobile"){
        return (
            <div class={props.class}>
                <IonIcon name="logo-instagram" />
            </div>
        );
    } else if(props.class === "instagram-mobile"){
        return (
            <div class={props.class}>
                <img src="assets/img/logo.png" />
            </div>
        );
    } else if(props.class === "pesquisa"){
        return (
            <div class={props.class}>
                <input type="text" placeholder="Pesquisar" />
            </div>
        );
    } else if(props.class === "icones"){
        return (
            <div class={props.class}>
                <IonIcon name="paper-plane-outline" />
                <IonIcon name="compass-outline" />
                <IonIcon name="heart-outline" />
                <IonIcon name="person-outline" />
            </div>
        );
    } else {
        return (
            <div class={props.class}>
                <IonIcon name="paper-plane-outline" />
            </div>
        );
    }
}