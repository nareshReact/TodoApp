var React = require('react');
var About = React.createClass({
   render:function(){
     return(
      <div>
       <h1 className="text center">About</h1>
       <p>
         This is a weather application build on React.i have built this
         for my training course
       </p>
       <p>
         Here are some of the tools i used.
       </p>
       <ul>
         <li>
           <a href="http://openweathermap.org">Open Weather Map</a> - I used
           open weather Map to search for weather data by city name.
         </li>
       </ul>
    </div>   
     );
   }


});
module.exports=About;
