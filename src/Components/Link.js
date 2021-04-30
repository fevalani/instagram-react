const dataLinks = ["Sobre","Ajuda","Imprensa","API","Carreiras","Privacidade","Termos","Localizações","Contas mais relevantes","Hashtags","Idioma"];

export default function Link() {
    return (
        <div class="links">
            {dataLinks.map(linkDot)}
        </div>
    );
}

function linkDot(element, i){
    return i === 0 ? element : " • "+ element;
}
