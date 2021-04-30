import IconsTopBar from "./IconsTopBar";

const iconClasses = ["logo", "logo-mobile", "instagram-mobile", "pesquisa", "icones", "icones-mobile"]

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                {iconClasses.map(value => <IconsTopBar class={value} />)}
            </div>
        </div>
    );
}