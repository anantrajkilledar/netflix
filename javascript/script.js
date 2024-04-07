// api key from tmdb
const api = "api_key=d3e1314ea2f5978f7f04dd5852f4f2a5";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300";



// requests for movies data

const requests = {
    
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "...": str;
}

// banner
fetch(requests.fetchNetflixOrignals)
.then((res)=> res.json())



.then((data) => {
    console.log(data.results);

    // every refresh movie will be changed

    const setMovie = 
    data.results[Math.floor(Math.random() * data.results.length -1)];



    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_des = document.getElementById("banner_discription");

    banner.style.backgroundImage =
    "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_des.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;

});



// movie row

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");

        // Create a new row for Netflix originals
        const row = document.createElement("div");
        row.className = "row netflixrow";
        headrow.appendChild(row);

        // Create a title for the row
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);

        // Create a container for posters in this row
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        // Loop through each Netflix original movie and create poster element
        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            // Generate unique ID for each poster
            var posterId = movie.name.replace(/\s+/g, ""); // Replace spaces in movie name
            poster.id = posterId;

            // Assuming img_url is defined elsewhere, append poster path to it
            poster.src = img_url + movie.poster_path;

            poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";
               
            row_posters.appendChild(poster); // Append poster to the container
        });
    })
    .catch((error) => {
        console.error('Error fetching Netflix originals:', error);
    });

// trending

// top rated

fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

         data.results.forEach(movie => {
               const poster = document.createElement("img");
               poster.className = "row_posterLarge";
               poster.id = movie.id;
               poster.src = img_url + movie.poster_path; // Assuming img_url is defined elsewhere


               poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";
               
               row_posters.appendChild(poster);
         });
    })
        .catch((error) => {
        console.error('Error fetching data:', error);
});

 // comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");

        // Create a new row for comedy movies
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        // Create a title for the row
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        // Create a container for posters in this row
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        // Loop through each comedy movie and create poster element
        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            // Generate unique ID for each poster
            var posterId = movie.id;

            // Assuming img_url is defined elsewhere, append poster path to it
            poster.src = img_url + movie.poster_path;
            poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";

            row_posters.appendChild(poster); // Append poster to the container
        });
    })
    .catch((error) => {
        console.error('Error fetching comedy movies:', error);
    });

// horror

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");

        // Create a new row for comedy movies
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        // Create a title for the row
        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        // Create a container for posters in this row
        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        // Loop through each comedy movie and create poster element
        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            // Generate unique ID for each poster
            var posterId = movie.id;

            // Assuming img_url is defined elsewhere, append poster path to it
            poster.src = img_url + movie.poster_path;
            poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";

            row_posters.appendChild(poster); // Append poster to the container
        });
    })
    .catch((error) => {
        console.error('Error fetching comedy movies:', error);
    });


    // romance

    
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");

    // Create a new row for comedy movies
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    // Create a title for the row
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Romantic Movies";
    row.appendChild(title);

    // Create a container for posters in this row
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    // Loop through each comedy movie and create poster element
    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        // Generate unique ID for each poster
        var posterId = movie.id;

        // Assuming img_url is defined elsewhere, append poster path to it
        poster.src = img_url + movie.poster_path;
        poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";

        row_posters.appendChild(poster); // Append poster to the container
    });
})
.catch((error) => {
    console.error('Error fetching comedy movies:', error);
});



// documentry

fetch(requests.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {
    const headrow = document.getElementById("headrow");

    // Create a new row for comedy movies
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    // Create a title for the row
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Documentry Movies";
    row.appendChild(title);

    // Create a container for posters in this row
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    // Loop through each comedy movie and create poster element
    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        // Generate unique ID for each poster
        var posterId = movie.id;

        // Assuming img_url is defined elsewhere, append poster path to it
        poster.src = img_url + movie.poster_path;

        poster.style.padding = "10px";
               poster.style.width = "calc(15% - 20px)"; // Width of 50% with padding subtracted
               poster.style.boxSizing = "border-box";
        row_posters.appendChild(poster); // Append poster to the container
    });
})
.catch((error) => {
    console.error('Error fetching comedy movies:', error);
});
