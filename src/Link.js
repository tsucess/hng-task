import './Link.css';


function Link() {
  return (
    <div className="links">
        <a className="link" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" >
          Twitter Link
        </a>
        <a className="link" href="https://www.zuriteam.com/" target="_blank" rel="noopener noreferrer" >
          Zuri Team
        </a>
        <a className="link" href="https://www.zuriboots.com/" target="_blank" rel="noopener noreferrer" >
            Zuri Boots
        </a>
        <a className="link" href="https://www.pythonbooks.com/" target="_blank" rel="noopener noreferrer" >
          Python Books
        </a>
        <a className="link" href="https://www.codersbg.com/" target="_blank" rel="noopener noreferrer" >
          Background check of coders
        </a>
        <a className="link" href="https://www.designlibrary.com/" target="_blank" rel="noopener noreferrer" >
          Design Books
        </a>
    </div>
  );
}

export default Link;
