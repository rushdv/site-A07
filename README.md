 # React Q/A


### **1. What is JSX, and why is it used?**
JSX is a syntax extension of JavaScript that allows writing HTML-like code inside React. It makes UI building easier and readable.


### **2. Difference between State and Props**
- **State**: Mutable, managed inside a component.
- **Props**: Read-only data passed from parent to child.


### **3. useState Hook**
`useState` is used to create and manage component state. It returns a value and a function to update that value.


### **4. Share State Between Components**
State can be shared using:
- Lifting state up
- Context API
- Global store (Redux, Zustand)


### **5. Event Handling in React**
Events are handled using camelCase syntax and functions. Example:
```jsx
<button onClick={handleClick}>Click</button>