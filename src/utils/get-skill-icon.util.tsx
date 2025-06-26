import { FaJs, FaReact, FaGitAlt, FaDocker, FaNodeJs, FaJava, FaPython, FaDatabase, FaServer, FaTools } from "react-icons/fa"
import { SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiNestjs, SiExpress, SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSwagger, SiPostman, SiSharp } from "react-icons/si"
import { MdArchitecture } from "react-icons/md"
import { GrDeploy } from "react-icons/gr";
import { TbApi } from "react-icons/tb"
import { BsCloud } from "react-icons/bs"
import { VscSymbolNamespace } from "react-icons/vsc"

export function getSkillIcon(id: string) {
  if (!id || typeof id !== "string") return null;
  switch (id.toLowerCase()) {
    case "js":
      return <FaJs className="text-yellow-400 w-8 h-8" />
    case "ts":
      return <SiTypescript className="text-blue-500 w-8 h-8" />
    case "react":
      return <FaReact className="text-cyan-400 w-8 h-8" />
    case "next":
      return <SiNextdotjs className="text-black dark:text-white w-8 h-8" />
    case "tailwind":
      return <SiTailwindcss className="text-sky-400 w-8 h-8" />
    case "redux":
      return <SiRedux className="text-purple-500 w-8 h-8" />
    case "node":
      return <FaNodeJs className="text-green-600 w-8 h-8" />
    case "nest":
      return <SiNestjs className="text-red-600 w-8 h-8" />
    case "express":
      return <SiExpress className="text-gray-700 dark:text-gray-200 w-8 h-8" />
    case "graphql":
      return <SiGraphql className="text-pink-500 w-8 h-8" />
    case "postgres":
      return <SiPostgresql className="text-blue-700 w-8 h-8" />
    case "mysql":
      return <SiMysql className="text-blue-400 w-8 h-8" />
    case "mongodb":
      return <SiMongodb className="text-green-700 w-8 h-8" />
    case "redis":
      return <SiRedis className="text-red-500 w-8 h-8" />
    case "git":
      return <FaGitAlt className="text-orange-500 w-8 h-8" />
    case "docker":
      return <FaDocker className="text-blue-400 w-8 h-8" />
    case "cicd":
      return <GrDeploy className="text-green-700 w-8 h-8" /> // Usa un ícono más representativo si tienes
    case "postman":
      return <SiPostman className="text-orange-400 w-8 h-8" />
    case "swagger":
      return <SiSwagger className="text-green-500 w-8 h-8" />
    case "csharp":
      return <SiSharp className="text-purple-700 w-8 h-8" />
    case "java":
      return <FaJava className="text-red-700 w-8 h-8" />
    case "python":
      return <FaPython className="text-yellow-500 w-8 h-8" />
    case "databases":
      return <FaDatabase className="text-blue-900 dark:text-white w-8 h-8" />
    case "backend":
      return <FaServer className="text-gray-700 dark:text-white w-8 h-8" />
    case "frontend":
      return <FaReact className="text-cyan-400 w-8 h-8" />
    case "tools":
      return <FaTools className="text-gray-700 dark:text-white w-8 h-8" />
    case "languages":
      return <VscSymbolNamespace className="text-blue-500 w-8 h-8" />
    case "architecture":
      return <MdArchitecture className="text-gray-700 dark:text-white w-8 h-8" />
    case "restful":
      return <TbApi className="text-blue-500 w-8 h-8" />
    case "microservices":
      return <MdArchitecture className="text-gray-700 dark:text-white w-8 h-8" />
    case "serverless":
      return <BsCloud className="text-blue-400 w-8 h-8" />
    default:
      return null
  }
}