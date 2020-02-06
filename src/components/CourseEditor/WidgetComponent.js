import React from "react";


const WidgetComponent = () =>
    <div>
    <div className="row">

        <div className="col-1">
            <p>

            </p>
        </div>
        <div className="col-11">
            <select className="custom-select">
                <option value="header">Header</option>
                <option value="w1">widget</option>
                <option value="w2">widget</option>
                <option value="w3">widget</option>
            </select>


        </div>


    </div>
    <div className="row">
                   <div className="col-1">
                                  <p>

                                  </p>

</div>
<div className="col-11">

<div className="input-group mb-3">

<input type="text" className="form-control wbdv-header-text"
placeholder="Header Text" aria-describedby="basic-addon1"/>
</div>
</div>
</div>
<div className="row">
<div className="col-1">
<p>

</p>

</div>
<div className="col-11">

<div className="input-group mb-3">

<input type="text" className="form-control wbdv-header-text"
placeholder="Widgetname" aria-describedby="basic-addon1"/>
</div>
</div>
</div>

<div className="row">
<div className="offset-1">
<a className="preview-text"> Preview </a>
</div>
</div>

<div className="row">
<div className="offset-1">
<a className="heading-text"> Heading Text </a>
</div>
</div>

</div>





export default WidgetComponent
