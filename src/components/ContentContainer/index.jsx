/*
<ContentContainer 
    title=""
    data={[]}
/>
*/

import { useState } from "react";
import Description from "../Description";
import FormattedDate from "../FormattedDate";
import Material from "../Material";
import Picture from "../Picture";
import Tech from "../Tech";
import TitleLink from "../TitleLink";

const ContentContainer = ({
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;
    return(
        <div id={SECTION_ID} className="scroll-m-14">
            <div className='text-primaryAccent px-2 font-medium'>{sectionTitle}</div>
            {
                data.map(({
                    date = "",
                    title = "",
                    link = "",
                    materials =[],
                    descriptions =[],
                    skills =[],
                    picture ="",
                },index) => (

                    <div 
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
                        className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase": ""}`}
                        onMouseEnter={() => setIsMouseEnter({[`${SECTION_ID}-${index}`]: true})}
                        onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`]: false})}
                    >
                        <div>
                            <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                            <Picture picture={picture} title={title}/>
                        </div>

                        <div className="grid gap-y-4">
                            <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            <div className="flex gap-4 text-xl items-center">
                                {
                                    materials.map((e,i)=>(
                                        <Material key={`${e}-material-${i}`} icon={e.type} link={e.link} />                
                                    ))
                                }
                            </div>
                            {
                                descriptions.map((e,i)=>(
                                    <Description key={`${e}-description-${i}`} description={e}/>
                                ))
                            }
                            {
                                skills.map((e,i)=> (
                                    <Tech key={`${e}-skill-${i}`}isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }                    
                        </div>
                    </div>
                ))
            }
        </div>                    
    )
}
export default ContentContainer;