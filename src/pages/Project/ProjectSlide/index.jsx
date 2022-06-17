import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/sea-green";

const ProjectSlide = ({ singleProject }) => {
  return (
    <Splide aria-label="My Favorite Images">
      {singleProject.slide.map((img, index) => (
        <SplideSlide key={index}>
          <img
            src={img}
            width={1362}
            height={945}
            alt={`Imagem do projeto ${singleProject.title}`}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProjectSlide;
