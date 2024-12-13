import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const sections = [
    {
      id: 1,
      content: "Section 1",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      content: "Section 2",
      image: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      content: "Section 3",
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      content: "Section 4",
      image: "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const element = document.getElementById(`section-${section.id}`);
      const rect = element.getBoundingClientRect();

      if (rect.top >= 0 && rect.top < windowHeight / 2) {
        setBackgroundImage(section.image);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {sections.map((section) => (
        <div
          key={section.id}
          id={`section-${section.id}`}
          className="section"
        >
          {section.content}
        </div>
      ))}
    </div>
  );
}

export default App;
