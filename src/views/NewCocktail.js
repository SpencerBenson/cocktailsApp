import React, {useState} from "react";
import { Row, Col } from "reactstrap";

const NewCocktail = (props) => {
  const [inputList, setInputList] = useState([{ ingredient: "", measurment: "" }]);
  // handle input change
const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...inputList];
  list[index][name] = value;
  setInputList(list);
};
 
// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};
 
// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { ingredient: "", measurment: "" }]);
};
  return (
    <>

      <div className="card border-secondary mb-3" style={{maxWidth: '100%',margin:'auto', marginTop:'100px'}}>
        <Row>
          <Col  >
            <div className="" style={{ maxWidth: '100%'}}>
              <div className="card-header"></div>
              <div className="card-body">
                
                <form>
                  <fieldset>
                    <legend>Submit Cocktail</legend>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Cocktail name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cocktailName"
                        aria-describedby="emailHelp"
                        placeholder="Name of the cocktail"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Make it catchy.
                      </small>
                    </div>   
                    <div className="form-group">
                      <label for="exampleSelect1">Select category</label>
                      <select className="form-control" id="exampleSelect1">
                        <option value=''>Alcoholic</option>
                        <option value=''>Non-alcoholic</option>
                        <option value=''>Beer</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleTextarea">Instructions</label>
                      <textarea
                        className="form-control"
                        id="exampleTextarea"
                        rows="3"
                      ></textarea>
                    </div>
                    {inputList.map((x, i) => {
        return (
          <Row>
          <Col>
          <div className="form-group">
            <label  class="col-form-label" for="exampleSelect1">Ingredient {i+1}: </label>
            <input
             class="form-control"
              name="ingredient"
              placeholder="Enter ingredient"
              value={x.ingredient}
              onChange={e => handleInputChange(e, i)}
            />
            </div>
         </Col>
          <Col>
          <div className="form-group">
            <label  class="col-form-label" for="exampleSelect1">Measurment {i+1}: </label>
            <input
             class="form-control"
              name="measurment"
              placeholder="Enter measurment"
              value={x.measurment}
              onChange={e => handleInputChange(e, i)}
            />
            </div>
          </Col>
          <Col>
       <div className="form-group">
              {inputList.length !== 1 && <button type="button" className="btn btn-outline-warning add-rem-btn"
             
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button type="button" className="btn btn-outline-info add-rem-btn" onClick={handleAddClick}>Add</button>}
            
        </div>
        </Col>
          </Row>
        );
      })}
                    <div className="form-group">
                      <label for="exampleInputFile">Upload cocktail image</label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleInputFile"
                        aria-describedby="fileHelp"
                      />
                      <small id="fileHelp" className="form-text text-muted">
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                      </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewCocktail;
