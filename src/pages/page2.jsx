import "./page2.css";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <div className="container">
        Page2
      </div>
    <Link className='btn2' to={"page3"}>Play</Link>
    </div>
  )
}

export default Page2