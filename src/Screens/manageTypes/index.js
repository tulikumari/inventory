import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { connect } from 'react-redux';
import * as typesAction from '../../actions/typesAction';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: 'tuli',
      object_type:'',
      object_title:'',
      fields:[
        {id:'',title:'',type:''}
      ],
    }; 
    this.AddTypes = this.AddTypes.bind(this);
  }

  AddTypes(e){
    e.preventDefault();
    let types = {
      name: this.state.name
    }
    console.log("types"+types);
    this.props.createTypes(types);
  }

  listView(data, index){
    return (
        <div className="my-auto box-grid" key={index}>
          <div className="heading">
            {data.name}
            <a href="#" className="cross">x</a>
          </div>
           
        </div>
    )
  }

  render() {
    return (
        <React.Fragment>
        <Header />
        <section className="body-sec">
          <div className="flex-row">
            
              {this.props.types.map((type, i) => this.listView(type, i))}
            
            <div class="col-md-3">
              <button onClick={(e) => this.AddTypes(e)}>Add Types</button>
            </div>
          </div>
        </section>
        </React.Fragment>
        
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    types: state.types
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTypes: types => dispatch(typesAction.createTypes(types)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);