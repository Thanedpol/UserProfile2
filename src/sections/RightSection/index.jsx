import About from "../About";
import ContentContainer from "../../components/ContentContainer";
import { data as experienceData } from "../../contents/experience"
import { data as projectData } from "../../contents/project"
import { data as otherData} from "../../contents/other"
import { data as AwardData} from "../../contents/Award"
import Footer from "../Footer";

const RightSection = ({onInitial}) => {
    return (
        <div className="grid gap-y-14 lg:gap-y-40 px-5">
            <About 
                title="About"
                onInitial={onInitial}
            />
            <ContentContainer 
                onInitial={onInitial}
                title="Project"
                data={projectData}
            />
            <ContentContainer 
                onInitial={onInitial}
                title="Others Experience"
                data={experienceData}
            />

            <ContentContainer 
                onInitial={onInitial}
                title="Award"
                data={AwardData}
            />
            <ContentContainer 
                onInitial={onInitial}
                title="Others"
                data={otherData}
            />
            <Footer />
        </div>
    )
}

export default RightSection;