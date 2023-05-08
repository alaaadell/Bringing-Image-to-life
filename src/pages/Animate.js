import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function Animate() {
  const [files, setFiles] = useState();
  const [files2, setFiles2] = useState();
  const [previews, setPreviews] = useState();
  const [previews2, setPreviews2] = useState();
  const [show, setShow]=useState(false);
  const[showBox,setShowBox]=useState(true);
  // rendering previews
  useEffect(() => {
    if (!files) return;

    let tmp = [];

    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }

    const objectUrls = tmp;

    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  useEffect(() => {
    if (!files2) return;
    let tmp2 = [];

    for (let i = 0; i < files2.length; i++) {
      tmp2.push(URL.createObjectURL(files2[i]));
    }

    const objectUrls2 = tmp2;

    setPreviews2(objectUrls2);

    // free memory

    for (let i = 0; i < objectUrls2.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls2[i]);
      };
    }
  }, [files2]);

  return (
    <div className="page-animate">
      <div className="lhs">
        <div className="src-img">
          <h1>Please choose the source image:</h1>
          <input
            className="imageFile"
            type="file"
            name="file1"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles(e.target.files);
              }
            }}
          />
          {previews &&
            previews.map((pic) => {
              return (
                <img
                  style={{
                    width: 100,
                  }}
                  src={pic}
                  alt="preview"
                />
              );
            })}
        </div>

        <div className="drv-vid">
          <h1>Please choose the driving video:</h1>
          <input
            className="videoFile"
            type="file"
            name="file2"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFiles2(e.target.files);
              }
            }}
          />

          {previews2 &&
            previews2.map((pic1) => {
              return (
                <video
                  style={{
                    width: 100,
                    height: 100,
                    
                  }}
                  src={pic1}
                  autoPlay
                  loop
                  muted
                />
              );
            })}
        </div>
        <fieldset className="RadiosButton">
                <legend>Choose The Model.</legend>
               <input type="radio" value="value1" name="group1"></input>First method.
               <br></br>
               <br></br>
               <input type="radio" value="value2" name="group1"></input>Second method.
               <br></br>
               <br></br>
               <input type="radio" value="value3" name="group1"></input>Third method.

               </fieldset>
        <div>
          <button className="animate" onClick={()=>setShow(true)}>Animate</button>  
        </div>
      </div>

      <div className="result">
        <div className="video-container">
          {
           show?<video width={350} src="fashion.mp4" autoPlay loop muted  />:null
          }
        </div>
      </div>
    </div>
  );
}
export default Animate;
