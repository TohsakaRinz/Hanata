// 个人项目展示；链接指向对应的站内技术手记，不冒充尚未公开的 GitHub 仓库。
export type Project = {
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  tags: string[];
};

export const projectsData: Project[] = [
  {
    id: "circle-wangan",
    name: "CiRCLE Wangan",
    description: "围绕 Assetto Corsa 的首都高交通服务器实验，重点探索 Mod 车辆管理、内容维护及服务器运营流程。持续完善中。",
    icon: "🏎️",
    githubUrl: "/posts/archive-01-circle-wangan",
    tags: ["Assetto Corsa", "服务器", "Mod 管理"],
  },
  {
    id: "circle-garage",
    name: "CiRCLE Garage 2.0",
    description: "赛车服务器管理面板的 UX/UI 改版方案：深色工业风、图片式车库与更可靠的修改预览。真实联动仍需验证。",
    icon: "🏁",
    githubUrl: "/posts/archive-02-circle-garage",
    tags: ["UX/UI", "前端设计", "概念原型"],
  },
  {
    id: "android42-carplay",
    name: "Android 4.2 CarPlay 接收端实验",
    description: "尝试为旧安卓车机制作定制 APK，研究设备兼容、ADB 调试与接收端通信的实现条件。尚处实验阶段。",
    icon: "📱",
    githubUrl: "/posts/archive-03-android-carplay",
    tags: ["Android", "CarPlay", "旧设备"],
  },
];
