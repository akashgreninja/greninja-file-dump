import React, { useState } from "react";
import "./App.css";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
function App() {
  const [image, setimage] = useState("");
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
      // setloading(true);

      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          setimage(url);

        });
        console.log("here")

        // setloading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <form>
        <input
          type="file"
          onChange={handleFile}
          accept=".jpg,.png,.jpeg,.gif,.svg,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,.rar,.7z,.tar,.gz,.bz2,.mp3,.mp4,.wav,.avi,.mov,.wmv,.flv,.mkv,.3gp,.webm,.m4v,.mpg,.mpeg,.swf,.vob,.ogg,.ogv,.m4a,.wma,.aac,.f"
          name="photo"
          className="form-control"
          id="photo"
          minLength={1}
          required
        />
      </form>
      <button onClick={CreateUpload}>Upload</button>
    </div>
  );
}

export default App;
