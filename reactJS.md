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
- JSX: use html in javascript (attribute change a little bit: class => className, onclick => onClick
- SinglePage Application
- Fetch data:
```
    fetch('http://api.datalink')
        .then(response => response.json())
        .then(users => this.setState({data: users})
```
- Component: should use **key** for each component
- Think a big component and then break it into small component
- State and Props: React has one way data flow
- 
