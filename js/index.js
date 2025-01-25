$(document).ready(function () {
    const imgelmnt = document.getElementById("lost");
    $(imgelmnt).hover(
        function () {
            if (imgelmnt.src.includes("boxclosed.png")) {
                imgelmnt.src = "../elements/boxopen.png";
            }
        },
        function () {
            if (imgelmnt.src.includes("boxopen.png")) {
                imgelmnt.src = "../elements/boxclosed.png";
            }
        }
    );
});
