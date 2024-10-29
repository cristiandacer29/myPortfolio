
    function changeImage(imageList) 
    {
        document.getElementById("img-view").src = document.getElementById(imageList).src;
        document.getElementById("jerseyName").innerHTML = document.getElementById(imageList).alt;
    } 
    function imageFullScreen(illustratorImage)
    {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", "col-12 img-full-screen");
        createDiv.setAttribute("id", "viewImage");
        const elementHeader = document.header;
        document.body.insertBefore(createDiv, elementHeader);

        const createButton = document.createElement("button");
        createButton.setAttribute("class", "close-btn");
        createButton.setAttribute("onclick", "closeFullScreen()");
        createButton.innerHTML = "X";
        document.getElementById("viewImage").appendChild(createButton);

        const createDivChild = document.createElement("div");
        createDivChild.setAttribute("class", "full-screen-image col-11");
        createDivChild.setAttribute("id", "viewImageChildDiv");
        document.getElementById("viewImage").appendChild(createDivChild);

        const createImg = document.createElement("img");
        createImg.setAttribute("class", "image-center");
        createImg.setAttribute("id", "fullViewImage");
        document.getElementById("viewImageChildDiv").appendChild(createImg);
        document.getElementById("fullViewImage").src = document.getElementById(illustratorImage).src

        document.body.style.overflow = "hidden";
    }
    function closeFullScreen()
    {
        document.body.style.overflow = "visible";
        document.getElementById("viewImage").remove();
    }
