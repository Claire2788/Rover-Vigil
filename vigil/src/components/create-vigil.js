import React from "react";
import Form from 'react-bootstrap/Form'
import axios from 'axios';

//New Survey form

export default class CreateVigil extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      section1q1: '',
      section1q2: '',
      section1q3: '',
      section1q4: '',
      section2q1: '',
      section2q2: '',
      section2q3: '',
      section2q4: '',
      section3q1: '',
      section3q2: '',
      section3q3: '',
      section3q4: ''
    }

    

     // Setting up functions
     //this.onChangeQuestion1 = this.onChangeQuestion1.bind(this);
     //this.onChangeQuestion2 = this.onChangeQuestion2.bind(this);
     //this.onChangeQuestion3 = this.onChangeQuestion3.bind(this);
     //this.onSubmit = this.onSubmit.bind(this);

  }

  //These below handle changes are used for each field in the survey

  handleChangeS1Q1 = event => {
    const {value} = event.target;
    this.setState({ section1q1: value });
  }

  handleChangeS1Q2 = event => {
    const {value} = event.target;
    this.setState({ section1q2: value });
  }

  handleChangeS1Q3 = event => {
    const {value} = event.target;
    this.setState({ section1q3: value });
  }

  handleChangeS1Q4 = event => {
    const {value} = event.target;
    this.setState({ section1q4: value });
  }

  handleChangeS2Q1 = event => {
    const {value} = event.target;
    this.setState({ section2q1: value });
  }

  handleChangeS2Q2 = event => {
    const {value} = event.target;
    this.setState({ section2q2: value });
  }

  handleChangeS2Q3 = event => {
    const {value} = event.target;
    this.setState({ section2q3: value });
  }

  handleChangeS2Q4 = event => {
    const {value} = event.target;
    this.setState({ section2q4: value });
  }

  handleChangeS3Q1 = event => {
    const {value} = event.target;
    this.setState({ section3q1: value });
  }

  handleChangeS3Q2 = event => {
    const {value} = event.target;
    this.setState({ section3q2: value });
  }

  handleChangeS3Q3 = event => {
    const {value} = event.target;
    this.setState({ section3q3: value });
  }

  handleChangeS3Q4 = event => {
    const {value} = event.target;
    this.setState({ section3q4: value });
  }
   
  handleSubmit = event => {
    event.preventDefault()

    console.log(`Survey`);
    console.log(`Question 1: ${this.state.section1q1}`);
    console.log(`Question 2: ${this.state.section1q2}`);
    console.log(`Question 3: ${this.state.section1q3}`);

    //Object which gets posted to the database
    const vigilObject = {
      section1q1: this.state.section1q1,
      section1q2: this.state.section1q2,
      section1q3: this.state.section1q3,
      section1q4: this.state.section1q4,
      section2q1: this.state.section2q1,
      section2q2: this.state.section2q2,
      section2q3: this.state.section2q3,
      section2q4: this.state.section2q4,
      section3q1: this.state.section3q1,
      section3q2: this.state.section3q2,
      section3q3: this.state.section3q3,
      section3q4: this.state.section3q4

  };

  //Post request
  //NEED TO WORK OUT HOW TO ASSOCIATE THE USER
  axios.post('/api/vigils/create-vigil', vigilObject)
      .then(res => console.log(res.data));

  this.setState({section1q1: '', section1q2: '', section1q3: '', section1q4: '', section2q1: '', section2q2: '' , section2q3: '', section2q4: '', section3q1: '', section3q2: '', section3q3: '', section3q4: '' })


  this.props.history.push('/')
  }
  
  //The steps funcions 
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}

/*onSubmit(e) {
    e.preventDefault()

    console.log(`Survey`);
    console.log(`Question 1: ${this.state.question1}`);
    console.log(`Question 2: ${this.state.question2}`);
    console.log(`Question 3: ${this.state.question3}`);

    const vigilObject = {
        question1: this.state.question1,
        question2: this.state.question2,
        question3: this.state.question3,

    };
    axios.post('/api/vigils/create-vigil', vigilObject)
        .then(res => console.log(res.data));

    this.setState({question1: '', question2: '', question3: '' })

    
  // Redirect to Car List 
  //this.props.history.push('/vigil-list')
}
  */
  render() {    
    return (
      <React.Fragment>
      <h1>Rover Vigil</h1>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChangeS1Q1={this.handleChangeS1Q1}
          handleChangeS1Q2={this.handleChangeS1Q2}
          handleChangeS1Q3={this.handleChangeS1Q3}
          handleChangeS1Q4={this.handleChangeS1Q4}
          section1q1={this.state.section1q1}
          section1q2={this.state.section1q2}
          section1q3={this.state.section1q3}
          section1q4={this.state.section1q4}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChangeS2Q1={this.handleChangeS2Q1}
          handleChangeS2Q2={this.handleChangeS2Q2}
          handleChangeS2Q3={this.handleChangeS2Q3}
          handleChangeS2Q4={this.handleChangeS2Q4}
          section2q1={this.state.section2q1}
          section2q2={this.state.section2q2}
          section2q3={this.state.section2q3}
          section2q4={this.state.section2q4}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChangeS3Q1={this.handleChangeS3Q1}
          handleChangeS3Q2={this.handleChangeS3Q2}
          handleChangeS3Q3={this.handleChangeS3Q3}
          handleChangeS3Q4={this.handleChangeS3Q4}
          section3q1={this.state.section3q1}
          section3q2={this.state.section3q2}
          section3q3={this.state.section3q3}
          section3q4={this.state.section3q4}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
         <h3>Your Rover Inventory</h3>
            <Form.Group controlId="_id">
              <Form.Label>Why do you really want your BP Award?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section1q1} onChange={props.handleChangeS1Q1} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>How do you want to the Crew to rember you by?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section1q2} onChange={props.handleChangeS1Q2} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>Who do you want to be? What else do you want to achieve in your life besides Rovers?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section1q3} onChange={props.handleChangeS1Q3} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>What one thing would make the biggest improvement in my life over the next 12 months?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section1q4} onChange={props.handleChangeS1Q4} />
            </Form.Group>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
         <h3>Your Personal Inventory: General</h3>
         <p>Determining Where You Are So You Can Go Where You Want To Go and Be Who You Want to Be</p>

            <Form.Group controlId="_id">
              <Form.Label>With what am I now struggling? What are the three biggest problems I’m now facing?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section2q1} onChange={props.handleChangeS2Q1} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>What things are going very well for me right now?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section2q2} onChange={props.handleChangeS2Q2} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>My three most important projects are:</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section2q3} onChange={props.handleChangeS2Q3} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>My three most important goals are:</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section2q4} onChange={props.handleChangeS2Q4} />
            </Form.Group>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
    <h3>Your Personal Inventory: Financial and Career</h3>
         

            <Form.Group controlId="_id">
              <Form.Label>My current monthly income is:</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section3q1} onChange={props.handleChangeS3Q1} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>What things are going very well for me right now?</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section3q2} onChange={props.handleChangeS3Q2} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>My present net worth (assets minus liabilities) is</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section3q3} onChange={props.handleChangeS3Q3} />
            </Form.Group>

            <Form.Group controlId="_id">
              <Form.Label>Happiness/fulfillment with job or business:</Form.Label>
              <Form.Control as="textarea" rows={2} value={props.section3q4} onChange={props.handleChangeS3Q4} />
            </Form.Group>
    </div>
    <button className="btn btn-success btn-block">Submit</button>
    </React.Fragment>
  );
}