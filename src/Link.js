import './Link.css';


function Link() {
  return (
    <div className="links">
        <a className="link" href="https://www.twitter.com/" target="_blank" id="btn_twitter" rel="noopener noreferrer" >
          Twitter Link
        </a>
        <a className="link" href="https://training.zuri.team/" target="_blank" id="btn_zuri" rel="noopener noreferrer" >
          Zuri Team
        </a>
        <a className="link" href="https://books.zuri.team/" target="_blank" id="books" rel="noopener noreferrer" >
            Zuri Boots
        </a>
        <a className="link" href="https://books.zuri.team/python-for-beginners?ref_id=Ogunsanyataofeeq" id="book__python" target="_blank" rel="noopener noreferrer" >
          Python Books
        </a>
        <a className="link" href="https://background.zuri.team/" target="_blank" id="pitch" rel="noopener noreferrer" >
          Background check of coders
        </a>
        <a className="link" href="https://books.zuri.team/design-rules" id="book__design" target="_blank" rel="noopener noreferrer" >
          Design Books
        </a>
    </div>
  );
}

export default Link;
