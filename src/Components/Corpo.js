import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Sugestoes from "./Sugestoes";
import Link from "./Link";
import Copyrigth from "./Copyrigth";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
                <Sidebar />
                <Sugestoes />
                <Link />
                <Copyrigth />
            </div>
        </div>
    );
}