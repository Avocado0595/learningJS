- start: npx create-react-app my-app
- run:  npm start
- class & fucntion component:
+ class:
```javascript
    class App extends Component{
    constructor(props){
      super(props)
      } 
      render(){
      return(
      <h1>Hello</h1>
      )
      }
     
```
+ function:
   ``` javascript
   
   const App = function() {
   return(
      <h1>Hello</h1>
      )
   }
  ////////////////////
  
  const App = (props)=>{
  return(
      <h1>Hello</h1>
      )
  }
   
   ```
