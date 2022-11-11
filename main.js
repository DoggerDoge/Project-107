function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gy3q2O6WH/.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}