img_src_array = ["img/0hess_board_2.png, img/1Chess_puzzle.png"]
link_src_array = ["https://www.chess.com/play, https://www.chess.com/puzzles, https://www.chess.com/analysis?tab=analysis"]

var index = 0

function changePhotoRight() {
    
    var index = index+1
    if (index < img_src_array.length - 1) {document.getElementById('pic').src = img_src_array[index]}
    else {document.getElementById('pic').src = img_src_array[0]}
    
}

function changePhotoLeft() {
    var length = document.getElementById('pic').src.length
    
    var index = eval(document.getElementById('pic').src[length - 17])
    if (index > 0) {document.getElementById('pic').src = img_src_array[index - 1]}
    else {document.getElementById('pic').src = img_src_array[img_src_array.length - 1]}
        
    
}

function changelinkRight() {
    var length = document.getElementById('link').src.length
    
    var index = eval(document.getElementById('link').src[length - 17])
    if (index < link_src_array.length - 1) {document.getElementById('link').src = link_src_array[index + 1]}
    else {document.getElementById('link').src = link_src_array[0]}
    
}

function changelinkLeft() {
    var length = document.getElementById('link').src.length
    
    var index = eval(document.getElementById('link').src[length - 17])
    if (index > 0) {document.getElementById('link').src = link_src_array[index - 1]}
    else {document.getElementById('link').src = link_src_array[link_src_array.length - 1]}
        
    
}

document.getElementById('left').addEventListener("click", changePhotoLeft)

document.getElementById('right').addEventListener("click", changePhotoRight)