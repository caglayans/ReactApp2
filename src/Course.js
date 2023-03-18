import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';

import './Course.css';


const courseMap={
    Angular:Angular,
    Bootstrap:Bootstrap,
    Csharp:Csharp,
    Kompleweb:Kompleweb
}

function Course({courseName}) {

    return ( 
        <div>
            <img className="course" src={courseMap[courseName]}/>
        </div>
     );
}

export default Course;