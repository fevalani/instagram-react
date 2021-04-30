import Sugestoes from "./Sugestoes";
import Link from "./Link";
import Copyrigth from "./Copyrigth";
import User from "./User";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestoes />
            <Link />
            <Copyrigth />
        </div>
    );
}