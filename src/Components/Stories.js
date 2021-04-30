import IonIcon from "./IonIcon";
import Story from "./Story";

const user = ["9gag","meowed","barked","nathanwpylestrangeplanet","wawawicomics","respondeai","filomoderna","memeriagourmet"]

export default function Stories() {
    return (
        <div class="stories">
            {user.map(i => <Story user={i} />)}

            <div class="setinha">
                <IonIcon name="chevron-forward-circle" />
            </div>
        </div>
    );
}