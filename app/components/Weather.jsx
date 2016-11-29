var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var OpenWeatherMap = require('./OpenWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');
var Weather = React.createClass({
  getInitialState: function () {
     return {
      isLoading: false

     }
  },

  handleSearch: function (location) {
    var that = this;
   this.setState({
     isLoading: true,
    errorMessage: undefined
   });

    OpenWeatherMap.getTemp(location).then(function (temp) {

       that.setState({
         location: location,
         temp: temp,
         isLoading: false
       });
    }, function (errorMessage) {
     that.setState({
       isLoading: false,
      errorMessage: errorMessage.message
     });
    });

  },
   render:function(){
     var {isLoading,temp,location,errorMessage} = this.state;

     function renderMessage (){
       if (isLoading){
         return <h3 className="text-center">Fetching weather...</h3>;
       } else if(temp && location){
         return <WeatherMessage temp={temp} location={location} />;
       }
     }
     debugger;
     function renderError (){
       if (typeof errorMessage === 'string') {
         return (
           <ErrorModal message={errorMessage}/>
         )
       }
     }
    // var temp = this.state.temp;
     //var location = this.state.location;
     return(
       <div>
       <h1 className="text-center">Get Weather</h1>
       <WeatherForm onSearch={this.handleSearch}/>
       {renderMessage()}
       {renderError()}

       </div>
     );
   }


});
module.exports=Weather;
