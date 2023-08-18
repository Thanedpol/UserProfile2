import { faFacebook, faGithub, faLine, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    const githubProfileUrl = "https://github.com/Thanedpol";
    const LinkedInUrl = "https://www.linkedin.com/in/thankfulness-dechaduangsakul-64b9b5137/"
    const FacebookUrl = "https://www.facebook.com/Thankhuge2016"
    const LineUrl = "https://line.me/ti/p/vIPoNPESgB"

    return (
        <div className='flex items-end gap-x-4 text-2xl'>
            <a href={githubProfileUrl} target="_blank" rel="Github">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-1000' icon={faGithub} 
             /></a>
            <a href={LinkedInUrl} target="_blank" rel="LinkedIn">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-1000' icon={faLinkedin} 
            /></a>
            <a href={FacebookUrl} target="_blank" rel="Facebook">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-1000' icon={faFacebook} 
            /></a>
            <a href={LineUrl} target="_blank" rel="Line">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-1000' icon={faLine} 
            /></a>
        </div>
    )
}

export default Contact;