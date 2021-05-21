var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    console.log("binob");
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = run;

function run(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
};

