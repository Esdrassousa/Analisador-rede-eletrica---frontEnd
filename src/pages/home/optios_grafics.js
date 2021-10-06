import { Component } from "react"


class Options_graficos extends Component{

    optios1(){
        
    
    var options = {
      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title: 'Gráficos de Corrente',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           //0:{max:0},
           viewWindow: {
            
            max: [5, 5]
          }
           
        }},

        vAxis: {title: 'Corrente'},
        series: {
          
         //0: { axis: 'Corrente'},
          0: { color: '#808080' },
          
        }, 

        pointSize: 5,
    
        backgroundColor: 'transparent',
        
   }

   ////////////////////////////////////////////

   




   return (options)
}

   optios2(){
        
    
    var options = {

      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title:  'Gráficos de Corrente',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Corrente'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          //0: { axis: 'Corrente' },
          //1: { curveType: 'function' },
          0: { color: '#87ceeb' },
          1: { color: '#808080' },
        },

        
        pointSize: 5,
      
        backgroundColor: 'transparent',

       
   }
   return (options)
}

}

export default Options_graficos