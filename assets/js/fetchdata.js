const windowURL = new URL(window.location.href);
const params = new URLSearchParams(windowURL.search);
const id = parseInt(params.get("id"));

fetch("assets/json/data.json")
  .then((response) => response.json()) // Parse the JSON file into a JavaScript object
  .then((data) => {
    // Use the data as needed
    const program = data.programs[id - 1];
    const programName = document.getElementById("program-name");
    programName.textContent = program.program_name;

    const programImage = document.getElementById("program-image");
    programImage.setAttribute("src", program.imageSrc);

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
    testimonials.innerHTML = "";

    program.testimonials?.forEach((testimony) => {
      // Create the outer swiper-slide div
      const swiperSlide = document.createElement("div");
      swiperSlide.className = "swiper-slide";

      // Create the testimonial-item div
      const testimonialItem = document.createElement("div");
      testimonialItem.className = "testimonial-item";

      // Create the h3 for the name
      const h3 = document.createElement("h3");
      h3.textContent = testimony.name;

      // Create the p tag for the testimonial text
      const p = document.createElement("p");

      // Add the opening quote icon
      const quoteIconLeft = document.createElement("i");
      quoteIconLeft.className = "bi bi-quote quote-icon-left";
      p.appendChild(quoteIconLeft);

      // Add the span with testimonial text
      const span = document.createElement("span");
      span.textContent = testimony.testimonial;
      p.appendChild(span);

      // Add the closing quote icon
      const quoteIconRight = document.createElement("i");
      quoteIconRight.className = "bi bi-quote quote-icon-right";
      p.appendChild(quoteIconRight);

      // Append the h3 and p to the testimonial-item div
      testimonialItem.appendChild(h3);
      testimonialItem.appendChild(p);

      // Append the testimonial-item to the swiper-slide div
      swiperSlide.appendChild(testimonialItem);

      // Finally, append the swiper-slide to the testimonials container
      testimonials.appendChild(swiperSlide);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
