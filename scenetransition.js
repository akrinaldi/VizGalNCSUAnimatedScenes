 let currentScene = 1;
  
function showScene(sceneNumber) {
    // Hide scenes on initialization
    document.getElementById('scene1').style.display = 'none';
    document.getElementById('scene2').style.display = 'none';

  
    // Show the chosen scene
    if (sceneNumber === 1) {
      document.getElementById('scene1').style.display = 'block';
    } else {
      document.getElementById('scene2').style.display = 'block';
    }
  }
  
  // Start the display
  showScene(currentScene);
  
  // Function to change scenes every 2 minutes
  setInterval(() => {
    // Switch scenes
    currentScene = currentScene === 1 ? 2 : 1;
    showScene(currentScene);
  }, 120000);
  
