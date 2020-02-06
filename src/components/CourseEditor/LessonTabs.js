import React from "react";


const LessonTabs = ({lessons}) =>
<ul class="nav nav-tabs">
    {lessons.map(lessons =>
                 <li class="nav-item"key={lessons._id}>
                     <a class="nav-link">
                     {lessons.title}
                     </a>
                 </li> )}

</ul>
export default LessonTabs