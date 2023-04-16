import React, { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
function App() {
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const [done, setdone] = useState(false);
  const handleFile = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setimage(e.target.files[0]);
    }
  };

  const CreateUpload = (e) => {
    e.preventDefault();
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `Akash/${image.name}`);
      setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);
        });
        console.log("here");

        setloading(false);
        setdone(true);
        setTimeout(() => {
          setdone(false);
        }, 3000);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <center>
      <div className="App">
        <h1>GRENINJA FILE DUMP</h1>
        <form>
          <input
            type="file"
            webkitdirectory
            onChange={handleFile}
            accept="*/*"
            name="photo"
            className="form-control"
            id="photo"
            minLength={1}
            required
          />
        </form>
        <button onClick={CreateUpload}>Upload</button>
        {loading === true ? (
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            class="wheel-and-hamster"
          >
            <div class="wheel"></div>
            <div class="hamster">
              <div class="hamster__body">
                <div class="hamster__head">
                  <div class="hamster__ear"></div>
                  <div class="hamster__eye"></div>
                  <div class="hamster__nose"></div>
                </div>
                <div class="hamster__limb hamster__limb--fr"></div>
                <div class="hamster__limb hamster__limb--fl"></div>
                <div class="hamster__limb hamster__limb--br"></div>
                <div class="hamster__limb hamster__limb--bl"></div>
                <div class="hamster__tail"></div>
              </div>
            </div>
            <div class="spoke"></div>
          </div>
        ) : null}
        {done === true ? (
          <>
            <div class="upload-message">
              <p>Text successfully uploaded!</p>
            </div>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={200}
              recycle={false}
              gravity={0.5}
              colors={["#ff0000", "#00ff00", "#0000ff"]}
            />
          </>
        ) : null}
      </div>
    </center>
  );
}

export default App;
