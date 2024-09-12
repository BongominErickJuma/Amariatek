const windowURL = new URL(window.location.href);
const params = new URLSearchParams(windowURL.search);
const id = parseInt(params.get("id"));

fetch("https://bongominerickjuma.github.io/Amariatek/assets/json/data.json")
  .then((response) => response.json()) // Parse the JSON file into a JavaScript object
  .then((data) => {
    // Use the data as needed
    const program = data.programs[id - 1];
    const programName = document.getElementById("program-name");
    programName.textContent = program.program_name;

    const problem = document.getElementById("problem");
    problem.textContent = program.problem.description;

    const solution = document.getElementById("solution");
    solution.textContent = program.solution.description;

    const programStructure = document.getElementById("program-structure");
    program.program_structure?.forEach((ps) => {
      const h5 = document.createElement("h5");
      h5.textContent = ps.name;
      programStructure.appendChild(h5);

      ps.description?.forEach((sub) => {
        const h6 = document.createElement("h6");
        h6.textContent = sub.name;
        h6.className = "text-muted";

        const p = document.createElement("p");
        p.textContent = sub.description;

        programStructure.appendChild(h6);
        programStructure.appendChild(p);
      });
    });

    const programGoals = document.getElementById("program-goals");
    program.program_goals?.forEach((pg) => {
      const h6 = document.createElement("h6");
      h6.textContent = pg.name;
      h6.className = "text-muted";

      const p = document.createElement("p");
      p.textContent = pg.description;

      programGoals.appendChild(h6);
      programGoals.appendChild(p);
    });
    const achievements = document.getElementById("achievements");
    program.achievements?.forEach((achevement) => {
      const h6 = document.createElement("h6");
      h6.textContent = achevement.name;
      h6.className = "text-muted";

      const p = document.createElement("p");
      p.textContent = achevement.description;

      achievements.appendChild(h6);
      achievements.appendChild(p);
    });

    const impacts = document.getElementById("impacts");

    program.stories_of_impact?.forEach((impact) => {
      const h6 = document.createElement("h6");
      h6.textContent = impact.name;
      h6.className = "text-muted";

      const p = document.createElement("p");
      p.textContent = impact.story;

      impacts.appendChild(h6);
      impacts.appendChild(p);
    });
    const testimonials = document.getElementById("testimonials");
    program.testimonials?.forEach((testimony) => {
      const h6 = document.createElement("h6");
      h6.textContent = `${testimony.name}${
        testimony.position ? ` - ${testimony.position}` : ""
      },`;

      h6.className = "text-muted";

      const p = document.createElement("p");
      p.textContent = testimony.testimonial;

      testimonials.appendChild(h6);
      testimonials.appendChild(p);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
