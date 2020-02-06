import React from "react";

const TopicPills =({topics}) =>

<ul class="nav nav-pills">
    {topics.map(topics =>
                     <li class="nav-item"key={topics._id}>
                         <a class="nav-link">
                         {topics.title}
                         </a>
                     </li> )}
</ul>

export default TopicPills