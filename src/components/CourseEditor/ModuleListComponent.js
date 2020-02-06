import React from "react";


const ModuleListComponent = ({modules}) =>
<ul class="list-group">

    {modules.map(module =>
                     <li class="list-group-item" key={module._id}>
                         {module.title}
                     </li> )}
</ul>

export default ModuleListComponent