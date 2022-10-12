$(document).ready(async function () {
    //building designs
    $('.voting-child-middle').html(await buildVoting());
    //Voting Designs
    voteDesign();
});

async function buildVoting() {
    var result = '';
    await $.getJSON('../../api/allvotes', (d) => {
        d.forEach((d) => {
            result += `<div class="voting-design">
            <div class="design-title-voting">
                <h4>` + d.designName + `</h4>
            </div>
            <div>
                <p>by: ` + d.artistName + `</p>
            </div>
            <div class="design-pic-voting">
                <img class="design-img-voting" src="../Uploads/` + d.designId + d.designFileType + `">
            </div>
            <div class="voting-button-all flex flex content-center">
                
                <button type="button" id="` + d.designId + `" class="clean-button normal-colors voting-button ">Vote</button> 
                <p class="pl-3 text-align-center align_center " id="` + d.designId + `count">` + d.votes + `</p> 
            </div>
        </div>`
        });
    });
    return result;
}

/*async function upload(e) {
    e.preventDefault();
    let formData = new FormData($("#upload-form")[0])
    formData.append("artist", parseInt(localStorage.userid))

    await fetch('../../api/Upload', {
        method: 'POST',
        body: formData,
        enctype:"multipart/form-data"
    });
    location.reload()
}
*/
function voteDesign() {

    $('.voting-button').click(async function () {

        // creating Formdata to send to the API
        let formData = new FormData();
        formData.append("userId", parseInt(localStorage.userid))
        formData.append("designGuid", this.id)
        formData.append("isUpvote", true)
        // adding an Authorization header with the JWT token 
        let headers = new Headers()
        headers.append("Authorization", "Bearer " + localStorage.jwt)
        //console.log(headers.get("Authorization"))
        // sending the POST request
        await fetch('../../api/Vote', {
            method: 'POST',
            body: formData,
            enctype: "multipart/form-data",
            headers: headers
        });
        location.reload()
    });
}
