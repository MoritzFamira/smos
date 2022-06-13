//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header");
let file; //this is a global variable and we'll use it inside multiple functions
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});
//If user drop File on DropArea
let dropfile = "";
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    dropfile = event.dataTransfer.files[0];
    dragText.textContent = "" + dropfile.name;
    $("#file").remove();
});

async function dragfetch() {
    if (dropfile !== "") {
        let formData = new FormData($("#upload-form")[0])
        formData.set("file", dropfile)
        formData.append("artist", parseInt(localStorage.userid))
        let response = await fetch('../../api/Upload', {
            method: 'POST',
            body: formData,
            enctype: "multipart/form-data"
        });
        let result = await response.json();
        console.log(result)
        document.getElementById('upload-form').reset();
        dropfile = "";
        location.reload();
    }
}