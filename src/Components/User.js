const user = {username: "Catana", profile: "catanacomics"}

export default function User() {
    return (
        <div class="usuario">
            <img src={"assets/img/"+ user.profile +".svg"} />
            <div class="texto">
            <strong>{user.profile}</strong>
            {user.username}
            </div>
        </div>
    );
}