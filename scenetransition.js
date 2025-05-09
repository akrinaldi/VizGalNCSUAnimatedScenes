 let currentScene = 1;
  
function showScene(sceneNumber) {
    // Hide scenes on initialization
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'none';
    document.getElementById('scene3').style.display = 'none';
    document.getElementById('scene4').style.display = 'none';
    // Add additional scenes here 
  // document.getElementById('scene#).style.display = 'none';

  
    // Show the chosen scene
    if (sceneNumber === 1) {
      document.getElementById('scene1').style.display = 'block';
    } else if(sceneNumber===2) {
      document.getElementById('scene2').style.display = 'block';
    } else if(sceneNumber===3) {
      document.getElementById('scene3').style.display = 'block';
    } else if(sceneNumber===4) {
      document.getElementById('scene4').style.display = 'block';
    }
  // Add additional scenes here
 //  else if(sceneNumber===#) {
      //document.getElementById('scene#').style.display = 'block';
    //}
  }

  // start the display
  showScene(currentScene);
  

// loop to create scene range
function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  // set scene array for looping
// replace X with the number of scenes in your html
  const scenes = range(1,X);
  let currentSceneIndex = 0;
  
  // function to move to next scene
  function nextScene() {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    currentScene = scenes[currentSceneIndex];
    console.log(currentScene);
    showScene(currentScene);
}
  // function to change scenes every set interval
//change X to fit your time interval
  setInterval(nextScene, X);

  
  
