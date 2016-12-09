var React = require('react');
var Navigation = require('./Navigation.jsx');



var Main = React.createClass({
   render:function(){
     return(
       <div>

         <div >
             <div >
               <Navigation />
               <p>Main.jsx Rendered</p>
               {this.props.children}
             </div>
         </div>

     </div>
     );
   }


});

module.exports=Main;
