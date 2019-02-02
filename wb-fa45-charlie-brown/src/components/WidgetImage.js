import React from 'react'
export default class WidgetImage
    extends React.Component {
    render() {
        return (


            <div
                className="row col-10 container wbdv-heading-widget centered wbdv-widget"
                data-name="sample-image-widget">
                <div className="row col-lg-12 wbdv-widget-first-row">
                    <div className="col-lg-6 wbdv-widget-title sign">
                        <h3>Image Widget</h3>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon name="arrow-round-up" className="ion-icon"></ion-icon>
                    </div>
                    <div className="col-lg-1 ">
                        <ion-icon name="arrow-round-down" className="ion-icon"></ion-icon>
                    </div>
                    <div className="col-lg-3 wbdv-widget-select-widget-type">
                        <select className="custom-select custom-select-md mb-3">
                            <option selected>Image</option>
                            <option value="1">Heading</option>
                            <option value="2">List</option>
                            <option value="3">Image</option>
                            <option value="4">Link</option>
                        </select>
                    </div>
                    <div className="col-lg-1">
                        <ion-icon name="close-circle-outline" className="ion-icon"></ion-icon>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-image-widget-image">
                    <div className="form-group col-12">
                        <input type="text" className="form-control"
                               placeholder="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></input>
                    </div>
                </div>
                <div className="row col-lg-12 wbdv-heading-widget-enter-name">
                    <div className="form-group col-12">
                        <input type="text" className="form-control"
                               placeholder="Widget name"></input>
                    </div>
                </div>
                <div className="row col-lg-12 preview">
                    <h3>Preview</h3>
                </div>
                <div className="row col-lg-12 ">
                    <img
                        src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        className="wbdv-widget-image responsive"></img>
                </div>
            </div>


        );
    }
}