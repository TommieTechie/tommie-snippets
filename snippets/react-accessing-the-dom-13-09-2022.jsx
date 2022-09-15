// ⚠️ This snippet won't run, as I'm using a fictional UI library as an example! ⚠️

import React, { useEffect, useRef } from "react";
// This imported library doesn't exist. 🙅‍♀️ It's just here for the sake of the example!
import UILibraryElement from "ui-library-element";

const Component = ({ children }) => {
  // Creating a ref with the useRef() hook. 🪝
  const uiLibraryRef = useRef();

  useEffect(() => {
    // Add a useEffect callback here and using an UI library element to make it look cute. 💄
    const node = uiLibraryRef.current;
    UILibraryElement.initialize(node);

    // Don't forget to return a cleanup function for when the component is unmounted. 🧹
    // If not, we'll have event handlers polluting DOM nodes that aren't in the document anymore.
    return () => node.uiLibraryRef.destroy();

    // Remember to specify your effect's dependencies array! We know that our node will never change, so make it an empty array.
  }, []);

  // Adding the ref prop to the div. 👇
  return (
    <div ref={uiLibraryRef}>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Component>
      <div>UI Library Element</div>
    </Component>
  );
};

export default App;
