async function fetchRepos() {
  // const response = await fetch("http://api.github.com/users/ahmedhhamdy/repos", { next: {
  //   revalidate: 60
  // }})
  const response = await fetch("http://api.github.com/users/ahmedhhamdy/repos")
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const repos =  await response.json()
  return repos
}

export default async function ReposPage() {
    const repos = await fetchRepos()
    // console.log(repos)

    return (
      <div>
        <h1>ReposPage</h1>
        <h2>
          {repos[2].name}
        </h2>
      </div>
    );
  }
  