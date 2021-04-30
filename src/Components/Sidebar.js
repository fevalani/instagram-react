import Sugestoes from "./Sugestoes";
import Link from "./Link";
import Copyrigth from "./Copyrigth";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>
            <Sugestoes />
            <Link />
            <Copyrigth />
        </div>
    );
}