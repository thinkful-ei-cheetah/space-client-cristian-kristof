import React from 'react';

    export default  ({handleSubmit}) => {
      return (
        <form className="learn-form" onSubmit={handleSubmit}>
          <br/>
          <label htmlFor="learn-guess-input">What's the translation for this word?</label>
          <br/>
          <br/>
          <input type="text" required id="learn-guess-input"/>
          <br/>
          <button className= "submit-ans" type="submit">Submit your answer</button>
        </form>
      )
    }

