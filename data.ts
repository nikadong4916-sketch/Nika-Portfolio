export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  detailImages: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    bio: string;
    tagline: string;
    email: string;
    avatar: string;
  };
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Nika Portfolio",
    role: "Visual Designer & Creative Developer",
    bio: "NIKA UXUI Portfolio",
    tagline: "专注于通过极致的设计细节和逻辑严密的交互，为用户创造卓越的数字体验。",
    email: "525572505@qq.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  projects: [
    {
      id: "ethereal-echoes",
      title: "自驱项目",
      description: "如何从0-1搭建一个作品集网站",
      coverImage: "https://i.imgur.com/JskITyV.png",
      detailImages: [
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png"
      ]
    },
    {
      id: "urban-monolith",
      title: "视觉项目",
      description: "运营项目123.",
      coverImage: "https://i.imgur.com/JskITyV.png",
      detailImages: [
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png"
      ]
    },
    {
      id: "kinetic-flow",
      title: "个人项目",
      description: "关于个人能力的一些展现",
      coverImage: "https://i.imgur.com/JskITyV.png",
      detailImages: [
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png"
      ]
    },
    {
      id: "kinetic-flow-2",
      title: "其他项目",
      description: "其他的一些个人描述",
      coverImage: "https://i.imgur.com/JskITyV.png",
      detailImages: [
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png",
        "https://i.imgur.com/JskITyV.png"
      ]
    }
  ]
};
update
