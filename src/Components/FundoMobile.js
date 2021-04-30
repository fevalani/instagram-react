import IonIcon from "./IonIcon";

const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

export default function Navbar() {
    return (
        <div class="fundo-mobile">
            {icons.map((i) => <IonIcon name={i} />)}
      </div>
    );
}