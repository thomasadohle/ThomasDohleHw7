import React from 'react'
import CourseRow from "./CourseRow";
import ModuleList from "./ModuleList";
import CourseService from "../services/CourseService";
import CourseGrid from "./CourseGrid";

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

var course = null;


class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.courseDeleted = this.courseDeleted.bind(this);
        this.state = {
            course: {title: ''},
            courses: this.props.courses
        };
    }

    createNewCourse = () => {
        this.props.courseService.addCourse(this.state.course);

        this.setState(
            {
                courses: this.state.course

            }
        )
    };


    courseDeleted = () => {

        this.setState({
            courses: this.props.courseService.courses

        })

    };


    newCourseTitleChanged = (event) => {
        this.setState(
            {
                course: {title: event.target.value}
            });
    };

    render() {
        return (
            <div className="container-fluid" id="wbdv-page-container">

                <form>
                    <div className="form-group row col-lg-12" id="wbdv-top-nav">
                        <nav className="navbar col-12">

                            <Link to="/grid">
                                <div className="col-1">
                                    <ion-icon name="apps" size="large"/>
                                </div>
                            </Link>
                            <Route path="/grid" exact
                                   render={() =>
                                       <CourseGrid
                                           addCourse={this.addCourse}
                                           deleteCourse={this.deleteCourse}
                                           courses={this.state.courses}
                                           courseService={this.CourseService}/>}/>

                            <div className="col-sm-4 col-lg-3 text-right" id='wbdv-title'>
                                Course Manager
                            </div>
                            <div className="col-sm-6 col-lg-4" id="wbdv-new-course">
                                <input type="text" className="form-control"
                                       id="wbdv-new-course-title" placeholder="Enter new course title"
                                       onChange={this.newCourseTitleChanged}/>
                            </div>
                            <div className="col-1">
                                <ion-icon name="add-circle" size="large" id="wbdv-add-button"
                                          onClick={this.createNewCourse}
                                />
                            </div>
                        </nav>

                    </div>
                </form>

                <div className="row card" id="wbdv-page-text">
                    <div className="container col-lg-9 col-sm-12 table-responsive" id="wbdv-table-container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Update</th>
                                <th scope="col">Title</th>
                                <th scope="col">Owned By</th>
                                <th scope="col">Last Modified</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.courses.map(course =>
                                    <CourseRow
                                        key={course.id}
                                        deleteCourse={this.props.deleteCourse}
                                        courseDeleted={this.courseDeleted}
                                        course_={course}
                                    />
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseTable