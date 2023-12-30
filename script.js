const projects = [
    // (Projects array remains unchanged)

    {
        image: 'project1.jpg',
        title: 'Project 1',
        details: 'This is the details text for Project 1.'
      },
      {
        image: 'project2.jpg',
        title: 'Project 2',
        details: 'This is the details text for Project 2.'
      },
      {
        image: 'project3.jpg',
        title: 'Project 3',
        details: 'This is the details text for Project 3.'
      },
      {
        image: 'project4.jpg',
        title: 'Project 4',
        details: 'This is the details text for Project 4.'
      },
      {
        image: 'project5.jpg',
        title: 'Project 5',
        details: 'This is the details text for Project 5.'
      },
      {
        image: 'project6.jpg',
        title: 'Project 6',
        details: 'This is the details text for Project 6.'
      },
      {
        image: 'project7.jpg',
        title: 'Project 7',
        details: 'This is the details text for Project 7.'
      },
      {
        image: 'project8.jpg',
        title: 'Project 8',
        details: 'This is the details text for Project 8.'
      },
      {
        image: 'project9.jpg',
        title: 'Project 9',
        details: 'This is the details text for Project 9.'
      },
      {
        image: 'project10.jpg',
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