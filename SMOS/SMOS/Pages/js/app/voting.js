$(document).ready(async function () {
    //building designs
    $('.voting-child-middle').html(await buildVoting());
    //Voting Designs
    voteDesign();
});
async function buildVoting() {
    var result = '';
    await $.getJSON('../data/getalldesigns.json', (d) => {
        d.forEach((d) => {
            result += `<div class="voting-design">
            <div class="design-title-voting">
                <h4>`+d.name + `</h4>
            </div>
            <div>
                <p>by: `+d.artist + `</p>
            </div>
            <div class="design-pic-voting">
                <img class="design-img-voting" src="../Uploads/` + d.guid + d.fileEnding + `">
            </div>
            <div class="voting-button-all">
                <button type="button" id="`+d.guid+`" class="voting-button">Up</button>       
            </div>
        </div>`
        });
    });
    return result;
}
function voteDesign(){
    $('.voting-button').click(function () {
        alert("Hello\nHow are you?"); 

    });
}