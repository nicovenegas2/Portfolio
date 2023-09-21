export function changeColorSocialMedia(newColor = "var(--color-text)") {
    // search for all the social media icons
    let socialMedia = document.getElementsByClassName("social-media-div");
    // search for all the social media icons
    let socialMediaButton = socialMedia[0].getElementsByClassName("icon-button");
    // change the color of the icons
    for (let i = 0; i < socialMediaButton.length; i++) {
        socialMediaButton[i].style.color = newColor;
    }

    // search for navbar
    let navbar = document.getElementsByClassName("nav-link");
    // change the color of the icons
    for (let i = 0; i < navbar.length; i++) {
        navbar[i].style.color = newColor;
    }

}