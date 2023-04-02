img_src_array = ["img/Chess_board_2.png", "img/Chess_puzzle.png", "img/Chess_Analysis.png"]
link_src_array = ["https://www.chess.com/play", "https://www.chess.com/puzzles", "https://www.chess.com/analysis?tab=analysis"]

var index = 0

function changePhotoRight() { 
    index = index+1
    if (index <= img_src_array.length - 1) {document.getElementById('pic').src = img_src_array[index]}
    else {document.getElementById('pic').src = img_src_array[0]; index = 0}
    document.getElementById('link').href = link_src_array[index]
}

function changePhotoLeft() {
    index = index-1
    if (index >= 0) {document.getElementById('pic').src = img_src_array[index]}
    else {document.getElementById('pic').src = img_src_array[img_src_array.length - 1]; index = 2}
    document.getElementById('link').href = link_src_array[index]
}

document.getElementById('right').addEventListener("click", changePhotoRight)

document.getElementById('left').addEventListener("click", changePhotoLeft)

