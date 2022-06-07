$(document).ready(async function () {
    //building designs
    $('.voting-child-middle').html(await buildVoting());
    //Voting Designs
    voteDesign();
});
async function buildVoting() {
    var result = '';
    await $.getJSON('../../api/getUnapprovedDesigns', (d) => {
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
    e.preventDefault();
    let formData = new FormData($("#upload-form")[0])
    formData.append("artist", parseInt(localStorage.userid))
    //console.log(formData.get("name"))
    //console.log(formData.get("file"))
    //console.log(formData.get("artist"))
    let response = await fetch('../../api/Upload', {
        method: 'POST',
        body: formData,
        enctype:"multipart/form-data"
    });
    //let result = await response.json();
    location.reload()
}

function voteDesign(){

    $('.voting-button').click( async function () {
        //console.log(this.id);
        
        let formData = new FormData();
        formData.append("userId",parseInt(localStorage.userid))
        formData.append("designGuid",this.id)
        formData.append("isUpvote",true)
        //console.log(formData.get("designGuid"))
        let response = await fetch('../../api/Vote',{
           method: 'POST',
           body: formData,
            enctype:"multipart/form-data"
        });
        
    });
}
