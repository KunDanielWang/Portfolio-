import JavaSvg from "./svgComponents/JavaSvg.jsx";
import JavascriptSvg from "./svgComponents/JavascriptSvg.jsx";
import PythonSvg from "./svgComponents/PythonSvg.jsx";
import CppSvg from "./svgComponents/CppSvg.jsx";
import HTMLSvg from "./svgComponents/HTMLSvg.jsx";
import CSS_Svg from "./svgComponents/CSS_Svg.jsx";
import NodeJsSvg from "./svgComponents/NodeJsSvg.jsx";
import DockerSvg from "./svgComponents/DockerSvg.jsx";
import AWS_Svg from "./svgComponents/AWS_Svg.jsx";
import ReactSvg from "./svgComponents/ReactSvg.jsx";
import LinuxSvg from "./svgComponents/LinuxSvg.jsx";
const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-icons">
                <JavaSvg />
                <JavascriptSvg />
                <PythonSvg />
                <CppSvg />
                <HTMLSvg />
                <CSS_Svg />
                <NodeJsSvg />
                <DockerSvg />
                <AWS_Svg />
                <ReactSvg />
                <LinuxSvg />
            </div>
        </div>
    )
}

export default Skills
