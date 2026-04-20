import "../styles/menubar.css"
import start from '../assets/winodwsstartlogo.png'
export const Menubar = () => 
{
    return (
        <div id="bar">
            <img id="start-logo" src={start} alt="windows 7 background" />
        </div>
    );
}