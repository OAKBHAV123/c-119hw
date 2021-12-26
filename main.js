function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("Mobilenet",modelLoaded);
  }
  
  function modelLoaded()
  {
    console.log("Model Loaded!");
  }
  
  function draw()
  {
    image(video,0,0,300,300);
    classifier.classify(video,gotresult)
  }
  
  function gotresult(results,error)
  {
    if(results){
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label
      document.getElementById("result_Accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    }
    else{
      console.log(error);
    }
  }