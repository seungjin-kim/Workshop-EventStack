import React, { Fragment } from 'react'

function addEventForm({ handleInputChange, addEvent }) {

  return (
    <Fragment>
      <form onSubmit={addEvent}>
        <label htmlFor="eventTitle">title: </label>
        <input id="eventTitle" type="text" name="eventTitle"
          onChange={handleInputChange} />
        <br/>
        <label htmlFor="description">description: </label>
        <input id="description" type="text" name="description"
          onChange={handleInputChange} />
        <br/>
        <label htmlFor="summary">summary: </label>
        <input id="summary" type="text" name="summary"
          onChange={handleInputChange}/>
        <br/>
        <label htmlFor="startDate">start date: </label>
        <input id="startDate" type="text" name="startDate"
          onChange={handleInputChange} />
        <br/>
        <label htmlFor="endDate">end date: </label>
        <input id="endDate" type="text" name="endDate"
          onChange={handleInputChange} />
        <br/>
        <label htmlFor="cost">cost: </label>
        <input id="cost" type="number" name="cost"
          onChange={handleInputChange} />
        <br/>
        <input type="submit" value="submit"/>
      </form>
    </Fragment>
  )
}

export default addEventForm;
