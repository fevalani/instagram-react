import IonIcon from "./IonIcon";
import Story from "./Story";

const usuario = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"]

export default function Stories() {
    return (
        <div class="stories">
            {usuario.map(i => <Story usuario={i} />)}

            <div class="setinha">
                <IonIcon name="chevron-forward-circle" />
            </div>
        </div>
    );
}