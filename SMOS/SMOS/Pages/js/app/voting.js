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
                <p class="text-align-center align_center" id="`+d.guid+`count">0</p>      
            </div>
        </div>`
        });
    });
    return result;
}
async function upload(e) {
    console.log($("#upload-form")[0])
    e.preventDefault();
    let formData = new FormData($("#upload-form")[0])
    formData.append("artist", 1)//localStorage.user)
    //TODO give the design a name somehow
    formData.append("name", "TEST")
    //console.log(formData.get("artist"))
    console.log(formData)
    let response = await fetch('../../api/Upload', {
        method: 'POST',
        body: formData,
        enctype:"multipart/form-data"
    });
    let result = await response.json();

    alert(result.message);
}

function voteDesign(){

    $('.voting-button').click(function () {
        alert("Hello\nHow are you?"); 

    });
}
