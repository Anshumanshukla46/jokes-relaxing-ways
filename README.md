# Fetching API's
Fetching data from APIs (Application Programming Interfaces) is a common task in React applications, and it is typically done using the fetch() method or other HTTP libraries like Axios, jQuery, or the built-in XMLHttpRequest object.

we can use an empty dependency array ([]) to the useEffect hook. This ensures that the fetch() method is only called once, when the component mounts. If we passed a dependency array with a variable, the fetch() method would be called every time that variable changes.
