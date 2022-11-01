import './DisplayPic.css';
import { FiCamera } from "react-icons/fi";


function DisplayPic() {
     
  return (
    <div className="display_pic">
      <a href="contact.html"><img src="./Content.png" className="share" alt="Profile_image" /></a>
            <div className="pic_bg">
        <img src="./displaypic.png" className="display_img" alt="Profile_image" />
        <FiCamera size="20" className="camera" />
      </div>
        <p className="profile_name">Ogunsanya Taofeeq</p>
    </div>
  );
}

export default DisplayPic;
