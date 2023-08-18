import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'
import { useEffect,useState } from 'react'

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection,setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev,elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    //{ title: "Article", sectionId:"Article-section"},
    const obj = {title:elementTitle, sectionId: elementId }
    setNavBarItems((prev) => {
      if(prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev,obj];
      }
      return prev;
    });
  }

  const handleScroll = () => {
    for(let index=0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const elOffsetTop= document.getElementById(el).getClientRects()[0].y;
      const height= document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewheight = window.innerHeight * 0.3;

      if (elOffsetTop <= 0) {
        if ((elOffsetTop + height)> viewheight) {
          setCurrentSection(el)
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewheight) {
        setCurrentSection(el)
      }
    }
  }

  useEffect(() => {
    if(sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  },[sectionIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[sectionIds])

  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App
