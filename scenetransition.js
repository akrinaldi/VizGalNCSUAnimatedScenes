 let currentScene = 1;
  
function showScene(sceneNumber) {
    // Hide scenes on initialization
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'none';
   document.getElementById('scene3').style.display = 'none';
   // Add additional scenes here 
  // document.getElementById('scene#).style.display = 'none';

  
    // Show the chosen scene
    if (sceneNumber === 1) {
      document.getElementById('scene1').style.display = 'block';
    } else if(sceneNumber===2) {
      document.getElementById('scene2').style.display = 'block';
    } else if(sceneNumber===3) {
      document.getElementById('scene3').style.display = 'block';
    }
 // Add additional scenes here
 //  else if(sceneNumber===#) {
      //document.getElementById('scene#').style.display = 'block';
    //}
  }
  
  // Start the display
  showScene(currentScene);
  
  // Function to change scenes every 2 minutes
  setInterval(() => {
    // Switch scenes
   // In the 1 ? X : 1 function, replace X with your total number of scenes
    currentScene = currentScene === 1 ? X : 1;
    showScene(currentScene);
  }, 120000);
  
