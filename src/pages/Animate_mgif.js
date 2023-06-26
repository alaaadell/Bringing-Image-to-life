import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function Animate_mgif() {
  const [files, setFiles] = useState();
  const [files2, setFiles2] = useState();
  const [previews, setPreviews] = useState();
  const [previews2, setPreviews2] = useState();
  const [show, setShow]=useState(false);
  const[showBox,setShowBox]=useState(true);
  const [resultVideo, setResultVideo] = useState("");
  const[ index,setIndex]=useState(0);
  const[loading,setLoading]=useState(false);

  let link = "";
  function onClickAnimategif(){
    console.log("here")
    setShow(false);
    setLoading(true);
    // Using Fetch API
    const formData = new FormData();
    formData.append("Image", files[0]);
    formData.append("Video", files2[0]);
    formData.append("Dataset","gif")
    // Get the selected radio button value
    const radioButtons = document.getElementsByName("group1");
    let selectedValue = null;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedValue = radioButtons[i].value;
        break;
      }
    }
    // Append the selected value to the formData object
    formData.append("Model", selectedValue);
    if(selectedValue == "First"){
      link = "https://3d23-35-233-182-59.ngrok-free.app/post"
    }
    else{
      link = "https://9087-34-126-74-2.ngrok-free.app/post"
    }
    fetch(link, {
  method: "POST",
  body: formData,
})
  .then((response) => {
    console.log(response);
    return response.blob();
  })
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    setResultVideo(url);
    setLoading(false);
    setShow(true);
  })
  .catch((err) => {
    setLoading(false);
    console.log(err.message);
  });


  }


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
  accept=".mp4,.gif"  // Add .gif here
  onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles2(e.target.files);
      setIndex( e.target.files[0].name.split('.').pop());
      console.log(index)
    }
  }}
/>

           {previews2 &&
  previews2.map((pic1) => {
    if (index === "gif") {
      return (
        <img
          style={{
            width: 100,
            height: 100,
          }}
          src={pic1} 
          alt="preview"
        />
      );
    } else {
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
    }
  })}
        </div>
        <fieldset className="RadiosButton">
                <legend>Choose The Model.</legend>
               <input type="radio" value="Thin" name="group1"></input>First method.
               <br></br>
               <br></br>
               <input type="radio" value="First" name="group1"></input>Second method.
               <br></br>
               <br></br>
               <input type="radio" value="Latent" name="group1"></input>Third method.

               </fieldset>
        <div>
          <button className="animate" onClick={()=>onClickAnimategif()}>Animate</button>  
        </div>
      </div>

      <div className="result">
        
          {
           show?<video width={350} src={resultVideo} autoPlay loop muted  />:null
          }
          {
            loading?<img src={"/loading.gif"}/>:null
          }
        
      </div>
    </div>
  );
}
export default Animate_mgif;
