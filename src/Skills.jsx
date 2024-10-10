import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const categorizedSkills = {
  Languages: [
    {
      id: 16,
      name: 'JavaScript',
      imgSrc: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
      officialLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      stars: 5,
    },
  ],
  Frameworks: [
    {
      id: 3,
      name: 'React.js',
      imgSrc: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png',
      officialLink: 'https://reactjs.org',
      stars: 3,
    },
    {
      id: 4,
      name: 'Node.js',
      imgSrc: 'https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png',
      officialLink: 'https://nodejs.org',
      stars: 5,
    },
    {
      id: 5,
      name: 'Express.js',
      imgSrc: 'https://www.rapidbrains.com/assets/img/services/rapidbrains-expressjs.webp',
      officialLink: 'https://expressjs.com',
      stars: 5,
    },
  ],
  MarkupLanguages: [
    {
      id: 13,
      name: 'HTML',
      imgSrc: 'https://static.vecteezy.com/system/resources/thumbnails/012/697/299/small/stylized-3d-html-logo-design-free-png.png',
      officialLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      stars: 4,
    },
    {
      id: 14,
      name: 'CSS',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s',
      officialLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      stars: 4,
    },
  ],
  Tools: [
    {
      id: 10,
      name: 'Git',
      imgSrc: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      officialLink: 'https://git-scm.com',
      stars: 5,
    },
    {
      id: 11,
      name: 'GitHub',
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      officialLink: 'https://github.com',
      stars: 5,
    },
    {
      id: 12,
      name: 'AWS S3',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfwftCJar78X8Nc3XF7a1oumB_BIsoS41yQ&s',
      officialLink: 'https://aws.amazon.com/s3',
      stars: 4,
    },
  ],
  Databases: [
    {
      id: 1,
      name: 'MongoDB',
      imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp',
      officialLink: 'https://www.mongodb.com',
      stars: 5,
    },
    {
      id: 2,
      name: 'Redis',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUvld0MRJ9eUl8xeb6eLIF4U8JsnKJpmczA&s',
      officialLink: 'https://redis.io',
      stars: 5,
    },
  ],
  Libraries: [
    {
      id: 9,
      name: 'Tailwind CSS',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjz4847sfjFA-6CA0FbJqb7cpenAdhMEIdQZeVSeL5tgAPaOKCGwr_I_2xbw0VZZDdBU&usqp=CAU',
      officialLink: 'https://tailwindcss.com',
      stars: 4,
    },
    {
      id: 7,
      name: 'Bootstrap',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
      officialLink: 'https://getbootstrap.com',
      stars: 3,
    },
    {
      id: 15,
      name: 'Postman',
      imgSrc: 'https://static-00.iconduck.com/assets.00/postman-icon-248x256-ik126so4.png',
      officialLink: 'https://www.postman.com',
      stars: 5,
    },
    {
      id: 6,
      name: 'Vite',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpLsQ6GyDp1kqJtjDm7JCQ1TujfUYLoO5xacqSN3x4R6QDsQtOiifxbCVHraVLL00lVA&usqp=CAU',
      officialLink: 'https://vitejs.dev',
      stars: 4,
    },
  ],
};

const Skills = () => {
  const navigate = useNavigate(); // Create navigate function

  return (
    <div className="skills-containerS">
      <div className="hero-sectionS">
        <h1 className="hero-titleS">My Skills</h1>
      </div>

      <div className="skills-list-containerS">
        <div className="skills-listS">
          {Object.values(categorizedSkills)
            .flat()
            .map((skill) => (
              <div key={skill.id} className="skill-itemS">
                <img src={skill.imgSrc} alt={skill.name} className="skill-imageS" />
                <a href={skill.officialLink} target="_blank" rel="noopener noreferrer" className="skill-linkS">
                  {skill.name}
                </a>
                <div className="starsS">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={`starS ${index < skill.stars ? 'filled' : ''}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="nav-buttonsS">
        <button className="nav-btnS" onClick={() => navigate('/Project')}>
          Back to Projects
        </button>
        <button className="nav-btnS2" onClick={() => navigate('/contact')}>
          Next to Contact
        </button>
      </div>
    </div>
  );
};

export default Skills;
