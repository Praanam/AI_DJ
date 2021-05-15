song = "";

function preload()
{
    song = loadSound("music.mp3")
}
function setup()
{
    canves = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}