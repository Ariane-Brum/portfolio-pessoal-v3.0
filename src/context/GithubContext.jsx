import { createContext, useEffect, useState } from "react";

export const GithubContext = createContext();

export const GithubContextProvider = ({ children }) => {
	const perPage = 6;
	const [user, setUser] = useState({});
	const [repo, setRepo] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMoreRepos, setHasMoreRepos] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchGitHubData = async () => {
			const token = import.meta.env.VITE_GITHUB_TOKEN;
			if (!token) {
				console.error('GitHub token is missing');
				return;
			}

			try {
				setLoading(true);

				const [profileResponse, reposResponse] = await Promise.all([
					fetch('https://api.github.com/user', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}),
					fetch(`https://api.github.com/user/repos?page=${page}&per_page=${perPage}`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}),
				]);

				if (!profileResponse.ok) {
					throw new Error('Failed to fetch profile');
				}

				if (!reposResponse.ok) {
					throw new Error('Failed to fetch repositories');
				}

				const profileData = await profileResponse.json();
				const reposData = await reposResponse.json();

				setUser(profileData);
				setRepo(reposData);
				setHasMoreRepos(reposData.length === perPage && (page * perPage) < profileData.public_repos);

			} catch (error) {
				console.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchGitHubData();
	}, [page, perPage]);

	return (
		<GithubContext.Provider
			value={{
				user,
				repo,
				page,
				hasMoreRepos,
				loading,
				setPage,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};