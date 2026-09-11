This is a readme file


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   getElementById() is used to select one element by its id.
   getElementsByClassName() is used to select elements that have a common class name. It returns elements in an HTMLCollection.
   querySelector() uses CSS selectors to select the first matching element.
   querySelectorAll() selects all matching elements and returns a NodeList.


2. How do you create and insert a new element into the DOM?

    To create a new element, we can use document.createElement().   EXP(document.createElement('li') .
    After creating it, we can add text or other content to the element and then insert it into the DOM using methods like appendChild().


3. What is Event Bubbling? And how does it work?

   Event Bubbling is a JavaScript process where an event starts from the element where it happened and then moves upward through its parent       elements. For example, if a button is inside a div and we click the button, the click event first happens on the button and then bubbles up    to the div and other parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

   Event Delegation is a technique where we add one event listener to a parent element instead of adding separate event listeners to each         child element. It works because of event bubbling, as the event from the child moves up to the parent. It is useful because it reduces the     number of event listeners, makes the code simpler, and can also handle events for elements that are added to the page later.

5. What is the difference between preventDefault() and stopPropagation() methods?

   preventDefault() is used to stop the browser's default action for an event, such as preventing a form from submitting or stopping a link       from opening another page. On the other hand, stopPropagation() is used to stop the event from moving to its parent elements through event     bubbling.
   
