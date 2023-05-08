export default function About() {
  return (
    <header>
      <div className="App">
        <div className="section">
          <div className="title">
          <img className="college-icon" src="kolya-logo.png" alt="robot" /> 
          <h1 className="ProjectName">  Bringing Images To Life</h1>
          
          </div>
          <div className="content">
          
            <p>
              Our gradution project  for year 2023 is to animate a static image using motion in
              a video. Our goal in this project is to save time, but how can it
              save time ? Long time ago, when the animator wanted to make an
              animation, he had to draw all the frames he wanted to display, but
              now they have to draw one frame and give it to the model with a
              video similar motion , and the model will make a video with the
              same motion, but using this frame that inputed to model, and this
              saves the time.
              
            </p>
          </div>
          <div>
            <h2 className="Team">Team Members</h2>
            <ul className="Team-Members">
              <li>Mohamed Hassan </li>
              <li>Alaa Amr</li>
              <li>Alaa Mostafa</li>
              <li>Asmaa Ashraf</li>
              <li> Alaa Adel</li>
            </ul>
           
          </div>
          <div>
          <img className="robot-icon" src="robot.png" alt="robot" />
        </div>
        <div>
        <p className="feedback">contact us : BringingImagesToLife2023@gmail.com </p>
        
        
        </div>
       
        
        </div>
       
      </div>
    </header>
  );
}
