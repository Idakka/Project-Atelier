import React from 'react';

const QuestionsAndAnswers = () => {

  return (
    <div id="qa-div">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>

      <form id="search">
        <input className="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        {/* NOTE - Search button will be replaced with icon later on  */}
        <button className="qa-search-btn">Search</button>
      </form>

      <p></p>

      {/* NOTE - Refactor to have a seperate component later on when there is more to display */}
      <div className="qa-card-sample">
        <b><div className="qa-div">Q: Question [Placeholder]</div></b><p></p>
        <div className="qa-div"><b>A: </b>Answer [Placeholder]</div><p></p>
        <div className="qa-footer">
          <label className="qa-username">by Username [Placeholder],
            <label className="qa-date"> Date Pladeholder
              <label className="qa-helpful"> Helpful? [Placeholder]
                <label className="qa-report"> Report [Placeholder] <p></p>
                  <label className="qa-load-more"><b>[LOAD MORE ANSWERS]</b>
                  </label>
                </label>
              </label>
            </label>
          </label>
        </div>
      </div>


      <p></p>

      <button className="qa-more">MORE ANSWERED QUESTIONS</button>
      <button className="qa-add">ADD A QUESTION +</button>

      <p></p>
    </div>




  );
};

export default QuestionsAndAnswers;