const [image_upload, video_upload] = document.querySelectorAll('input[type="file"]');
const [image_drag, video_drag] = document.querySelectorAll('.card-panel');
const [preview_image, preview_video] = document.querySelectorAll('#preview');
const resultImg = document.querySelector(".video-result>img");


image_upload.addEventListener('change', previewImage);
video_upload.addEventListener('change', previewVideo);
resultImg.addEventListener('contextmenu', openMenu);
resultImg.addEventListener('click', closeMenu);


function previewImage(e) {
    console.log(this.files[0])
    const src = window.URL.createObjectURL(this.files[0]);
    preview_image.src = src;
    preview_image.classList.remove('hidden');
}

function previewVideo(e) {
    console.dir(this);
    const src = window.URL.createObjectURL(this.files[0]);
    preview_video.src = src;
    preview_video.classList.remove('hidden');
    preview_video.loop = true;
    preview_video.play();
}

function openMenu(e) {
    let ctxMenu = document.getElementById("ctxMenu");
    ctxMenu.style.display = "block";
    ctxMenu.style.left = (event.pageX - 10) + "px";
    ctxMenu.style.top = (event.pageY - 10) + "px";
}

function closeMenu(e) {
    var ctxMenu = document.getElementById("ctxMenu");
    ctxMenu.style.display = "";
    ctxMenu.style.left = "";
    ctxMenu.style.top = "";
}



