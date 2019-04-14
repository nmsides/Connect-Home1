import React, { Component } from "react";

class ConfigureUsers extends Component {
  render() {
    return(

      <div className = 'row'>
        <div className = 'col-sm-7'>
            <div class="custom-control custom-checkbox">
              <h3>Tools</h3>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
            </div>
            <div class="custom-control custom-checkbox">
              <h3>QI Tools</h3>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
            </div>
          </div>
          <div className = 'col-sm-5'>

            <h3>Find User to Configure</h3>
            <div class="radio">
              <label><input type="radio" name="optradio"/>Option 1</label>
            </div>
            <div class="radio">
              <label><input type="radio" name="optradio"/>Option 2</label>
            </div>
            <div class="radio disabled">
              <label><input type="radio" name="optradio"/>Option 3</label>
            </div>

          </div>
      </div>


    )
  }




}

export default ConfigureUsers;
