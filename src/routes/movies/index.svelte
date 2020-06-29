<script>
  import apollo from "../../apollo.js";
  import { onMount } from "svelte";
  import { gql } from "apollo-boost";

  const MOVIES_QUERY = gql`
    query search {
      search(query: "batman") {
        page
        totalResults
        totalPages
        userMovies {
          id
          userId
          movieId
          rating
          saved
          movie {
            id
            title
            overview
            year
          }
        }
      }
    }
  `;

  let movies = [];

  onMount(() => {
    const observable = apollo.watchQuery({
      query: MOVIES_QUERY
    });
    const sub = observable.subscribe({
      next: ({ data }) => {
        movies = data.search.userMovies;
      }
    });
    return () => sub.unsubscribe();
  });
</script>

<ul>
  {#each movies as movie}
    <li>* {movie.movie.title}</li>
  {/each}
</ul>
