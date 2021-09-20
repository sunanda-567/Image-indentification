Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri)
    
    {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    }
    );
}
console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xgDG7FR8H/model.json',modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded');
}

function check()
{
    img=document.getElementById("capture_image");
    classifier.classify(img, got_result);
}

function got_result(error, results)
{
    if(error ){
        console.log(error);
    }
    
    else{
        console.log(results);

        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
