import { jsx as _jsx } from "react/jsx-runtime";
import { IconCloud } from "../components/magicui/icon-cloud";
const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "laravel",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export function IconCloudDemo() {
    const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
    return (_jsx("div", { className: "relative flex size-full items-center  justify-center overflow-hidden", children: _jsx(IconCloud, { images: images }) }));
}
