import React from 'react';

function TimeInput (props) {

    return (
        <div>
            <select name="Start Time" onChange={props.update('start_hour')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <select name="suffix" onChange={props.update('start_suffix')}>
                <option value="am">am</option>
                <option value="pm">pm</option>
            </select>
            <select name="End Time" onChange={props.update('end_hour')}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            <select name="suffix" onChange={props.update('end_suffix')}>
                <option value="am">am</option>
                <option value="pm">pm</option>
            </select>
        </div>
    )
}

export default TimeInput;