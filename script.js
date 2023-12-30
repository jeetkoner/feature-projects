const projects = [
    // (Projects array remains unchanged)

    {
        image: 'projectDetails/project1.jpg',
        title: 'Project 1',
        details: 'This is the details text for Project 1.'
      },
      {
        image: 'projectDetails/project2.jpg',
        title: 'Project 2',
        details: 'This is the details text for Project 2.'
      },
      {
        image: 'projectDetails/project3.jpg',
        title: 'Project 3',
        details: 'This is the details text for Project 3.'
      },
      {
        image: 'projectDetails/project4.jpg',
        title: 'Project 4',
        details: 'This is the details text for Project 4.'
      },
      {
        image: 'projectDetails/project5.jpg',
        title: 'Project 5',
        details: 'This is the details text for Project 5.'
      },
      {
        image: 'projectDetails/project6.jpg',
        title: 'Project 6',
        details: 'This is the details text for Project 6.'
      },
      {
        image: 'projectDetails/project7.jpg',
        title: 'Project 7',
        details: 'This is the details text for Project 7.'
      },
      {
        image: 'projectDetails/project8.jpg',
        title: 'Project 8',
        details: 'This is the details text for Project 8.'
      },
      {
        image: 'projectDetails/project9.jpg',
        title: 'Project 9',
        details: 'This is the details text for Project 9.'
      },
      {
        image: 'projectDetails/project10.jpg',
        title: 'Project 10',
        details: 'This is the details text for Project 10.'
      },
  ];

  let currentProjectIndex = 0;
  const projectBox = document.getElementById('project');

  function showProject(index) {
    projectBox.innerHTML = getProjectHTML(index);
    currentProjectIndex = index;
  }

  function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
  }

  function showPreviousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
  }

  function getProjectHTML(index) {
    const project = projects[index];
    return `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-details">
        <h2>${project.title}</h2>
        <p>${project.details}</p>
      </div>
    `;
  }

  // Initial project display
  showProject(currentProjectIndex);