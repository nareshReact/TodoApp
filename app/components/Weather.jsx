var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var openWeatherMap = require('./openWeatherMap.jsx');
var errorModal = require('./errorModal.jsx');
var Weather = React.createClass({
  getInitialState: function () {
     return {
      isLoading: false

     }
  },

  handleSearch: function (location) {
    var that = this;
   this.setState({
     isLoading:true,
    errorMessage: undefined
   });
    openWeatherMap.getTemp(location).then(function (temp){
       that.setState({
         location: location,
         temp: temp,
         isLoading: false
       });
    }, function (errorMessage) {
     that.setState({
       isLoading:false,
      errorMessage: e.message
     });
        alert(errorMessage);
    });

  },
   render:function(){
     var {isLoading,temp,location,errorMessage} = this.state;

     function renderMessage (){
       if (isLoading){
         return <h3 classame="text-center">Fetching weather...</h3>;
       } else if(temp && location){
         return <WeatherMessage temp={temp} location={location} />;
       }
     }
     function renderError (){
       if (typeof errorMessage === 'string') {
         return (
           <errorModal.jsx/>
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
