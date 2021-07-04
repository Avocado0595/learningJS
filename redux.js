Reducer


- Reducer trả về 1 object vì state sẽ nhận object này như 1 update và render lại component, tương tự khi dùng setState({}) cũng phải truyền 1 object
- switch default trong reducer trả về currentState; => cùng 1 object component sẽ không phải render lại
