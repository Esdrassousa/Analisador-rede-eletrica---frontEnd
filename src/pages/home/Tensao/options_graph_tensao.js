import { Component } from "react"


class Options_graficos_tensao extends Component{

    optios1(){
        
    
    var options = {
      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
    title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           max:0
           
        }},

        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { axis: 'Tensão' },       
        },

        
        
        pointSize: 5,
        xAxes: [{
          type: 'time',
          time: {
              unit: 'day',
              distribution: 'linear',
              displayFormats: {
                  'MM': 'SS'
              }
          },
          bounds: 'ticks',
      }],

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
        title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          /* 0: { color: '#87cefa' },
          1: { color: '#808080' },
          2: { color: '#afeeee' }, */
          0: { color: '#808080' },
          1: { color: '#a6aa3e' },
         
        },

        
        pointSize: 5,
        
        backgroundColor: 'transparent',

       
   }
   return (options)
}

optios3(){
        
    
    var options = {

      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { color: '#a6aa3e' },
        },

        
        pointSize: 5,
        
        backgroundColor: 'transparent',

       
   }
   return (options)
}

optios4(){
        
    
    var options = {

      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { color: '#87cefa' },
          1: { color: '#a6aa3e' },
        },

        
        pointSize: 5,
        
        backgroundColor: 'transparent',

       
   }
   return (options)
}

optios5(){
        
    
    var options = {

      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { color: '#87cefa' },
          
        },

        
        pointSize: 5,
        
        backgroundColor: 'transparent',

       
   }
   return (options)
}

optios6(){
        
    
    var options = {

      explorer: {
        maxZoomOut:4,
        keepInBounds: true
    },
        title: 'Gráficos de Tensão',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
           
           
        }},
        vAxis: {title: 'Tensão'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { color: '#87cefa' },
          1: { color: '#808080' },
          2: { color: '#a6aa3e' },
          
        },

        
        pointSize: 5,
        
        backgroundColor: 'transparent',

       
   }
   return (options)
}

optios7(){
        
    
  var options = {

    explorer: {
      maxZoomOut:4,
      keepInBounds: true
  },
      title: 'Gráficos de Tensão',
      
      hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
         //valor máximo a ser mostrado no eixo X
         
         
      }},
      vAxis: {title: 'Tensão'},
      series: {
        // Gives each series an axis name that matches the Y-axis below.
        0: { color: '#87cefa' },
        1: { color: '#808080' },
        
        
      },

      
      pointSize: 5,
      
      backgroundColor: 'transparent',

     
 }
 return (options)
}

optios8(){
        
    
  var options = {

    explorer: {
      maxZoomOut:4,
      keepInBounds: true
  },
      title: 'Gráficos de Tensão',
      
      hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
         //valor máximo a ser mostrado no eixo X
         
         
      }},
      vAxis: {title: 'Tensão'},
      series: {
        // Gives each series an axis name that matches the Y-axis below.
        0: { color: '#808080' },
        
        
      },

      
      pointSize: 5,
      
      backgroundColor: 'transparent',

     
 }
 return (options)
}

}

export default Options_graficos_tensao