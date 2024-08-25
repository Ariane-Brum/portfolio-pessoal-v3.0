import * as S from "./styles";

export const Loading = () => {
	return (
		<S.LoadContainer>
			<S.LoaderWrapper>
				<S.Loader>
					<S.LoaderInner />
				</S.Loader>
			</S.LoaderWrapper>
		</S.LoadContainer>
	);
};
