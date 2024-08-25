import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/sea-green";

const ProjectSlide = ({ singleProject }) => {
	return (
		<Splide aria-label={`Imagens do projeto ${singleProject.title}`}>
			{singleProject.slide.map((img) => (
				<SplideSlide key={img}>
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
