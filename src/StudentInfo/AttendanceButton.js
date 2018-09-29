import React from "react";
import Button from "@material-ui/core/Button/Button";
import './AttendanceButton.css';

class AttendanceButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Button className='attendance-btn' onClick={()=>{}} color='secondary'
                        variant='extendedFab'>{this.props.student.name}</Button>
            </div>
        );
    }
}

export default AttendanceButton;