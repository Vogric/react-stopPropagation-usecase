### Understanding Event Bubbling and Stop Propagation

🫧 Event Bubbling:

When you click on an element inside another element, like clicking on a button within a div, the click event doesn't just trigger on the button; it also "bubbles up" through its parent elements. So, the button's click event fires first, then its parent's click event, and so on up the DOM tree 🌳. This process is called event bubbling.

----------------------------------------------------------------

- ### Issue:

Without stopPropagation(), clicking the child element would trigger both the child and the parent event handlers.

> #### 🎥 Problem
> #### *See the code in branch:* problem
https://github.com/Vogric/react-stopPropagation-usecase/assets/53317134/9c6721ab-5234-4d67-ab81-5bb74148a13e

-------------------------
- ### Solution:

stopPropagation() 🚫:
Now, when you click the child element, the parent's click event won't be triggered anymore
> #### 🎥 Solution
> #### *See the code in branch:* solution
https://github.com/Vogric/react-stopPropagation-usecase/assets/53317134/dff3abc0-53d6-42aa-9bed-3c6e5e403c03



