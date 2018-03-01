
    var prevQuestion;
        
    //document.getElementById("ask").click(getAnswer);
         
    function getAnswer() {
            
        //generate array of responses
        var responses = [
                'Ask again later...', 'Yes', 'No', 'It appears to be so', 'Reply is hazy, please try again', 'Yes, definitely', 'What is it you really want to know?', 'Outlook is good', 'My sources say no', 'Signs point to yes', 'Do not count on it', 'Cannot predict now', 'As I see it, yes', 'Better not tell you now', 'Concentrate and ask again'];

        //create function for generating a random number between 0 and the number between parentheses
        function getRandom(num) {
            var my_num = Math.floor(Math.random() * num);
            return my_num;
            }
            
            // get random number between 0-14
        var num = getRandom(14);
            // use that number as position in array to get response, format it for HTML
        var answer = responses[num];
            
        if (document.getElementById("question").value == prevQuestion) {
                alert("Ask a new question!");
            }
            // make sure the user entered a question in the input box
          else if (document.getElementById("question").value == "") {
                alert("Ask a question!");
            }  
            // make sure the user ended their question with a question mark
          else if (document.getElementById("question").value.slice(-1) != "?") {
                alert("Use a question mark!");
            }    
            // remove previous answer and append new answer
         else {
                document.getElementById("answer").innerHTML=answer;
            } 
            prevQuestion = document.getElementById("question").value;
            
  };  //end getAnswer
